package tree_sitter_json_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_json "github.com/elginas/tree-sitter-json/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_json.Language())
	if language == nil {
		t.Errorf("Error loading Json grammar")
	}
}
