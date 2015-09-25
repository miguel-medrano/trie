/*
TEST SUITE (Note: Ran out of time...)
  Dictionary Passed
     Empty Dictionary
     Length One Dictionary
     Length > 1 Dictionary
     Repeated Words In Dictionary
     Differentiation between Lower-Case/Capital-Case
     Word Length
        = 1
        > 1
  Trie
     getWordsWithPrefix(prefix):
       No Double Words
       All LowerCase Returns
       Correct Prefix Return
       Middle Nodes between words not considered words
  Visually UI test
    change display for each key press
       Addition of letters.
       Delition of letters
    right prefix autocompletion
    At most 10 words displayed
    sorted Lexicographically

*/

monoWord = ["ask"];
diWord = ["question","answer"];
doubWord = ["twin","twin"];
multiWord = ["one","two","three","four","five"];

lessThanTen = ["one","two","three","four","five","six","seven","eight","nine"];
tenWord = ["one","two","three","four","five","six","seven","eight","nine","ten"];
moreThanTen = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven"];

oneLetter = ["a"];
twoLetter = ["i","a"];

noMidWord = ["a","and"];

QUnit.test( "single Word Trie", function( assert ) {
    var trie = Trie(monoWord);
    var wordArray1 = trie.getWordsWithPrefix("");
    var wordArray2 = trie.getWordsWithPrefix("a");
    var wordArray3 = trie.getWordsWithPrefix("as");
    var wordArray4 = trie.getWordsWithPrefix("ask");
    assert.ok( wordArray1.length == 1, "Passed!" );
    assert.ok( wordArray2[0] == "ask", "Passed!");
    assert.ok( wordArray3[0] == "ask", "Passed!");
    assert.ok( wordArray4[0] == "ask", "Passed!");
});

QUnit.test( "No Doubles", function(assert) {
    var trie = Trie(doubWord);
    var wordArray1 = trie.getWordsWithPrefix("t");
    assert.ok( wordArray1.length == 1, "Passed!");
    assert.ok( wordArray1[0] == "twin", "Passed!");
});

QUnit.test( "singe letter words", function(assert) {
    var trie1 = Trie(oneLetter);
    var trie2 = Trie(twoLetter);
    var wordArray1 = trie1.getWordsWithPrefix("a");
    var wordArray2 = trie2.getWordsWithPrefix("i");
    var wordArray3 = trie2.getWordsWithPrefix("a");
    assert.ok( wordArray1.length == 1, "Passed!");
    assert.ok( wordArray1[0] == "a", "Passed!");
    assert.ok( wordArray2.length == 1, "Passed!");
    assert.ok( wordArray2[0] == "i", "Passed!");
    assert.ok( wordArray3.length == 1, "Passed!");
    assert.ok( wordArray3[0] == "a", "Passed!");
});

QUnit.test("diWord Trie", function(assert) {
    var trie1 = Trie(diWord);
    var wordArray1 = trie1.getWordsWithPrefix("q");
    var wordArray2 = trie1.getWordsWithPrefix("a");
    assert.ok( wordArray1.length == 1, "Passed!");
    assert.ok( wordArray1[0] == "question", "Passed!");
    assert.ok( wordArray2.length == 1, "Passed!");
    assert.ok( wordArray2[0] == "answer", "Passed!");

});

QUnit.test("Node Between Words Not a word", function(assert){
    var trie1 = Trie(noMidWord);
    var wordArray1 = trie1.getWordsWithPrefix("a");
    var wordArray2 = trie1.getWordsWithPrefix("an");
    var wordArray3 = trie1.getWordsWithPrefix("and");
    assert.ok( wordArray1.length == 2, "Passed!");

    assert.ok( wordArray2.length == 1, "Passed!");

    assert.ok( wordArray3.length == 1, "Passed!");
});