Trie = function(wordDictionary) {
	var that = Object.create(Trie.prototype);
	var root = {}

    wordDictionary.forEach( function(word){
		var word = word.toLowerCase();
        var currentNode = root;
		for(var i=0; i<word.length; i++){
			var letter = word[i];
            if(!(letter in currentNode)){
				currentNode[letter] = {endingMarker: false};
			}
			currentNode = currentNode[letter];
		}
		currentNode.endingMarker = true;
	});

	that.getWordsWithPrefix = function(word){
		var word = word.toLowerCase();
        var currentNode = root;
		var prefixWordArray = [];
        var wordsInNode = function(node, word){
            if(node.endingMarker){
                prefixWordArray.push(word);
            }
            for(var letter in node){
                if(letter !== 'endingMarker'){
                    wordsInNode(node[letter], word+letter);
                }
            }
        }

        for(var i=0; i< word.length; i++) {
			var letter = word[i];
			if (letter in currentNode) {
				currentNode = currentNode[letter];
			} else {
                return prefixWordArray;
            }
		}
        wordsInNode(currentNode, word);
        return prefixWordArray;
	}
	Object.freeze(that);
	return that
}