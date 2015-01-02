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

		Quest.prototype.isEqualToComposition = function(composition) {
			var a = this.data;
			var b = composition.data;

			for (var i=0, len=a.length; i<len; i++) {
				a[i].sort();
			}

			for (var i=0, len=b.length; i<len; i++) {
				b[i].sort();
			}

			a = this.toSequence();
			b = composition.toSequence();

			if (a.length !== b.length) return false;

			for (var i=0, len=a.length; i<len; i++) {
				if (parseInt(a[i]) !== parseInt(b[i]))
					return false;
			}

			return true;
		};


		return Quest;

	})();

})();