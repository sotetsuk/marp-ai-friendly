Release a new version of the marp-ai-friendly theme.

## Instructions

1. List existing tags with `git tag -l 'v*' | sort -V` to determine the next version number.
2. Confirm the next version number with the user before proceeding.
3. Run the release workflow: `gh workflow run release.yml -f version=<version>`
4. Watch the workflow run with `gh run watch` and wait for it to complete.
5. Fetch the new tag and verify that `themes/ai_friendly.css` has the correct `/* @theme ai_friendly_<version> */` header.
6. Report the result to the user.
