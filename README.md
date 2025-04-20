# tree-sitter-json

## Development

[Tutorial](https://tree-sitter.github.io/tree-sitter/creating-parsers/1-getting-started.html)

```sh
pnpm install
tree-sitter generate
tree-sitter parse example_file
tree-sitter test
```

Generate expected results for test cases:

```sh
tree-sitter parse example_file --no-ranges
```
