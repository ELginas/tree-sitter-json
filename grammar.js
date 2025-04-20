/**
 * @file Json grammar for tree-sitter
 * @author elginas
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "json",

  rules: {
    source_file: ($) => $.dictionary,
    string: () => /"[a-zA-Z]+"/,
    field: ($) => seq(field("key", $.string), ":", field("value", $.string)),
    dictionary: ($) => seq("{", $.field, "}"),
  },
});
