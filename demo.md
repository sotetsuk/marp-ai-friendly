---
marp: true
theme: academic
paginate: true
math: katex
---

<!-- _class: lead -->

# Marpで研究室の発表スライドを作る

#### 〜Beamerを卒業しよう〜

<br>

**著者 太郎**
ほげほげ研究室 M2
YYYY/MM/DD

---

<!-- _header: 目次 -->

1. はじめに
1. コードブロック
1. 数式
1. 図

---

<!-- _header: 引用 -->


_“The biggest lesson that can be read from 70 years of AI
research is that general methods that leverage computation
are ultimately the most effective, and by a large margin.”
— R. Sutton [2019], “The Bitter Lesson.”_

---

<!-- _header: はじめに -->

- Marp とは **Markdown** で**スライド**を作成するためのソフトウェアである。
  - 基本的な Markdown のシンタックスがサポートされている。
- Markdown 上で `---` という区切り線を入れるだけで、次のページに移動することができる。$^1$

> 1: Marp は CommonMark という Markdown の仕様に沿って開発されているため、CommonMark に含まれていない「脚注」の文法（`[^1]` を使うもの）が提供されていない。そこで、https://github.com/marp-team/marp/discussions/150#discussioncomment-1302384 を参照して擬似的に脚注を実現した。

---

<!-- _header: コードブロック -->

```python
import torch
print(torch.cuda.is_available())
```

こんな感じでコードブロックを書くことができる。

```python
from transformers import AutoModelForMaskedLM, AutoTokenizer
model = AutoModelForMaskedLM.from_pretrained("cl-tohoku/bert-base-japanese-whole-word-masking")
tokenizer = AutoTokenizer.from_pretrained("cl-tohoku/bert-base-japanese-whole-word-masking")

inputs = tokenizer.encode_plus("私はとても[MASK]です。", return_tensors='pt')
outputs = model(**inputs)
tokenizer.convert_ids_to_tokens(outputs.logits[0][1:-1].argmax(axis=-1))
```

横幅は自動調整される（ドキュメントの[Auto-scaling](https://github.com/marp-team/marp-core#auto-scaling-features)を参照）。

---

<!-- _header: 数式 -->

$$ I_{xx}=\int\int_Ry^2f(x,y)\cdot{}dydx $$

$$
f(x) = \int_{-\infty}^\infty
    \hat f(\xi)\,e^{2 \pi i \xi x}
    \,d\xi
$$

こんな感じで数式を書くことができる。もちろんインラインの $\LaTeX$ も使える。  
ついでに絵文字も使える:smile:

---

<!-- _header: 図 -->

1. まず[このいらすとやのリンク](https://www.irasutoya.com/2018/10/blog-post_723.html)から画像（`kenkyu_woman_seikou.png`）を右クリックでダウンロードしてください。
2. この Markdown のあるディレクトリの中に `images` という名前のディレクトリを作り、先ほどダウンロードした画像を配置してください。これで準備が整いました。

![w:300 center](./images/kenkyu_woman_seikou.png)

---

<!-- _header: 中央ボックス -->

<!-- _class: center-box -->

<div class="box-content">

_"The biggest lesson that can be read from 70 years of AI research is that general methods that leverage computation are ultimately the most effective, and by a large margin."_ — R. Sutton [2019], "The Bitter Lesson."

</div>

---

<!-- _header: 左右レイアウトの例 -->

<div class="grid grid-cols-2 gap-4">
<div>

<img src="./images/kenkyu_woman_seikou.png" width="400">

</div>
<div>

## 研究成果の例

- 画像は左側40%の領域に配置
- テキストは右側55%の領域に配置
- 画像は自動的に垂直方向中央揃え
- 箇条書きなどの通常のMarkdown記法が使用可能
  - ネストされた項目
  - <span class="r">強調</span> や _<span class="b">イタリック</span>_ も使える
- 数式も使用可能: $E = mc^2$

</div>

---

<!-- _header: 図とキャプション -->

<div class="figure-with-caption">

<img src="./images/kenkyu_woman_seikou.png" width="400">

<p class="figure-caption">研究に成功した女性研究者のイラスト</p>

</div>

---

<!-- _header: 2つの図を横に並べる -->

<div class="figures-group">
  <div class="figures-row-nocaption">
    <img src="./images/kenkyu_woman_seikou.png" width="400">
    <img src="./images/kenkyu_woman_seikou.png" width="400">
  </div>
  <p class="figure-caption">研究に成功した女性研究者たち</p>
</div>

---

<!-- _header: 3つの図を横に並べる -->

<div class="figures-group">
  <div class="figures-row-nocaption">
    <img src="./images/kenkyu_woman_seikou.png" width="300">
    <img src="./images/kenkyu_woman_seikou.png" width="300">
    <img src="./images/kenkyu_woman_seikou.png" width="300">
  </div>
  <p class="figure-caption">研究に成功した女性研究者たち</p>
</div>

---

<!-- _header: 見出しスタイルの例 -->

## 青色の縦棒付き見出し（h2）
このように見出しの左端に青色の縦棒が表示されます。

### より小さな見出し（h3）
h3の見出しにも同様の縦棒が表示されます。

- 箇条書きなどの通常の要素と組み合わせても
- きれいに表示されます
  - 入れ子の箇条書きも問題ありません
