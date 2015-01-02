Node.prototype.removeAllChildren = function() {
	while(this.firstChild) {
		this.removeChild(this.firstChild);
	}
};