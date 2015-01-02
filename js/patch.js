Node.prototype.removeAllChildren = function() {
	while(this.firstChild) {
		this.removeChild(this.firstChild);
	}
};

NodeList.prototype.forEach = Array.prototype.forEach;
HTMLCollection.prototype.forEach = Array.prototype.forEach;