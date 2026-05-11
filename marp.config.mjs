// Marp configuration for marp-ai-friendly
//
// Adds Obsidian-style callout syntax support to Marp's markdown parser.
//
//   > [!NOTE] Optional title
//   > Body line 1
//   > Body line 2
//
// Supported types (with aliases) mirror Obsidian's default callouts:
//   note, abstract|summary|tldr, info, todo, tip|hint|important,
//   success|check|done, question|help|faq, warning|caution|attention,
//   failure|fail|missing, danger|error, bug, example, quote|cite
//
// Foldable suffix `+`/`-` is accepted (rendered statically; no animation).
// Unknown types fall through as ordinary blockquotes.

const ALIASES = {
  note: 'note',
  abstract: 'abstract', summary: 'abstract', tldr: 'abstract',
  info: 'info',
  todo: 'todo',
  tip: 'tip', hint: 'tip', important: 'tip',
  success: 'success', check: 'success', done: 'success',
  question: 'question', help: 'question', faq: 'question',
  warning: 'warning', caution: 'warning', attention: 'warning',
  failure: 'failure', fail: 'failure', missing: 'failure',
  danger: 'danger', error: 'danger',
  bug: 'bug',
  example: 'example',
  quote: 'quote', cite: 'quote',
};

const DEFAULT_TITLES = {
  note: 'Note', abstract: 'Abstract', info: 'Info', todo: 'Todo',
  tip: 'Tip', success: 'Success', question: 'Question', warning: 'Warning',
  failure: 'Failure', danger: 'Danger', bug: 'Bug', example: 'Example',
  quote: 'Quote',
};

const CALLOUT_RE = /^\[!([A-Za-z][\w-]*)\]([+-]?)[ \t]*([^\n]*)(?:\n([\s\S]*))?$/;

function obsidianCallouts(md) {
  md.core.ruler.after('block', 'obsidian_callout', (state) => {
    const Token = state.Token;
    const tokens = state.tokens;

    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].type !== 'blockquote_open') continue;
      if (tokens[i + 1]?.type !== 'paragraph_open') continue;
      if (tokens[i + 2]?.type !== 'inline') continue;
      if (tokens[i + 3]?.type !== 'paragraph_close') continue;

      const inline = tokens[i + 2];
      const m = CALLOUT_RE.exec(inline.content);
      if (!m) continue;

      const rawType = m[1].toLowerCase();
      const type = ALIASES[rawType];
      if (!type) continue;

      const fold = m[2];
      const titleText = (m[3] || '').trim();
      const bodyText = m[4] || '';

      let depth = 1;
      let closeIdx = -1;
      for (let j = i + 1; j < tokens.length; j++) {
        if (tokens[j].type === 'blockquote_open') depth++;
        else if (tokens[j].type === 'blockquote_close') {
          depth--;
          if (depth === 0) { closeIdx = j; break; }
        }
      }
      if (closeIdx === -1) continue;

      tokens[i].tag = 'div';
      tokens[i].attrJoin('class', `callout callout-${type}`);
      tokens[i].attrSet('data-callout', type);
      if (fold) tokens[i].attrSet('data-callout-fold', fold === '+' ? 'open' : 'closed');
      tokens[closeIdx].tag = 'div';

      tokens[i + 1].tag = 'div';
      tokens[i + 1].attrSet('class', 'callout-title');
      const titleClosePos = i + 3;
      tokens[titleClosePos].tag = 'div';

      const titleFinal = titleText || DEFAULT_TITLES[type];
      inline.content = titleFinal;
      inline.children = [];

      let insertCount = 0;
      if (bodyText.trim()) {
        const pOpen = new Token('paragraph_open', 'p', 1);
        pOpen.block = true;
        const pInline = new Token('inline', '', 0);
        pInline.content = bodyText;
        pInline.children = [];
        const pClose = new Token('paragraph_close', 'p', -1);
        pClose.block = true;
        tokens.splice(titleClosePos + 1, 0, pOpen, pInline, pClose);
        insertCount = 3;
      }

      const shiftedCloseIdx = closeIdx + insertCount;
      const bodyStart = titleClosePos + 1;
      if (shiftedCloseIdx > bodyStart) {
        const contentOpen = new Token('html_block', '', 0);
        contentOpen.content = '<div class="callout-content">\n';
        contentOpen.block = true;
        const contentClose = new Token('html_block', '', 0);
        contentClose.content = '</div>\n';
        contentClose.block = true;
        tokens.splice(bodyStart, 0, contentOpen);
        tokens.splice(shiftedCloseIdx + 1, 0, contentClose);
        i = shiftedCloseIdx + 2;
      } else {
        i = shiftedCloseIdx;
      }
    }
  });
}

export default {
  engine: ({ marp }) => marp.use(obsidianCallouts),
};
