Trie = function() {
	var that = Object.create(Trie.prototype);

	var root = {};



	that.insert = function(word) {
		var currentNode = root;
		for(var i=0; i < word.length; i++){
			if(!(word[i] in currentNode)){
				currentNode[word[i]] = {};
			}
			currentNode = currentNode[word[i]];
		}
		currentNode.endMarker = true;
	};

	that.search = function(word) {
		var currentNode = root;
		for(var i=0; i < word.length; i++){
			if(!(word[i] in currentNode)){
				return false
			}
			currentNode = currentNode[word[i]];
		}
		return currentNode.endMarker === true;
	}

	Object.freeze(that);
	return that
}