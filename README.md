# tree-sitter-json

Simple non-complete JSON tree-sitter implementation for learning purposes.

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

Test out regexes at https://regex101.com/. Even though docs say it uses Rust regex, stick with default PCRE2 one.

Test syntax highlighting:

```sh
tree-sitter highlight < example_file
```
