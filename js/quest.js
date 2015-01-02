(function(){
	var game = this.colorQuestGame = this.colorQuestGame || {};

	var questLevels = [
		[ [5,6], [3] ],
		[ [6], [1, 2] ],
		[ [5, 6] ],
		[ [3], [1, 2], [4] ],
		[ [1, 2], [3], [4], [5, 6]]
	];

	var Quest = game.Quest = (function() {
		function Quest(level) {
			var questData = questLevels[level];
			this.data = questData;
		}

		Quest.prototype = new game.Composition();

		return Quest;

	})();

})();