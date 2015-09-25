//Create a Trie
//@wordDictionary - dictionary with words to build a trie tree
//@return a trie populated with the dictionary words given
//API Functions
//  getWordsWithPrefix(prefix);
Trie = function(wordDictionary) {
    var that = Object.create(Trie.prototype);
	//initialize instance variables
    var root = {};
    //create loop functional (EXAMPLE USE OF FUNCTIONALS)
    var from_to = function(from, to, f){
        if(from > to) return;
        f(from); from_to(from+1,to, f);
    };
    //iterate over each element of wordDictionary to parse each word
    //to create the trie
    //forEach functional (EXAMPLE USE OF FUNCTIONALS)
    wordDictionary.forEach( function(upperWord){
		var word = upperWord.toLowerCase();
        var currentNode = root;
        from_to(0, word.length-1,function(i){
            var letter = word[i];
            if(!(letter in currentNode)){
                currentNode[letter] = {endingMarker: false};
            }
            currentNode = currentNode[letter];
        });
		currentNode.endingMarker = true;
	});
    //Public function using encapsulation
    //   MOST "COMPELLING": Usage of encapsulation to protect variables root and the return prefix array
    //@prefix - string argument to search words with this prefix in trie
    //@return - array with all words with the given prefix
	that.getWordsWithPrefix = function(prefix){
		var word = prefix.toLowerCase();
        var currentNode = root;
		var prefixWordArray = [];
        var wordsInNode = function(node, word){
            if(node.endingMarker){
                prefixWordArray.push(word);
            }
            Object.keys(node).forEach(function(letter){
                if(letter !== 'endingMarker'){
                    wordsInNode(node[letter], word+letter);
                }
            });
        };

        from_to(0,word.length-1,function(i){
            var letter = word[i];
            if (letter in currentNode) {
                currentNode = currentNode[letter];
            } else {
                return prefixWordArray;
            }
        });
        wordsInNode(currentNode, word);
        return prefixWordArray;
	};
	Object.freeze(that);
	return that
};