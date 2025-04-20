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
    source_file: ($) => $._value,
    _value: ($) => choice($.null, $.string, $.number, $.array, $.dictionary),
    null: () => "null",
    number: () => /[0-9]+(\.[0-9]+)*/,
    string: () => /"((\\[\\"nrt])|[^"\\])*"/,
    field: ($) => seq(field("key", $.string), ":", field("value", $._value)),
    dictionary: ($) =>
      seq("{", optional($.field), repeat(seq(",", $.field)), "}"),
    array: ($) => seq("[", optional($._value), repeat(seq(",", $._value)), "]"),
  },
});
