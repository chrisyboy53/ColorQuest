(function(){
	var game = this.colorQuestGame = this.colorQuestGame || {};

	var Composition = game.Composition = (function() {
		function Composition() {
			this.data = [];
		}
		return Composition;
	})();

	Composition.nonOverlappedPattern = [
		[], // pattern 0
		[2], // pattern 1, doesn't overlap with pattern 2.
		[1], // pattern 2, doesn't overlap with pattern 1.
		[], // pattern 3
		[], // pattern 4
		[6], // pattern 5, doesn't overlap with pattern 6.
		[5]
	];

	Composition.prototype.toSequence = function() {
		var seq = [];
		for (var i=0; i < this.data.length; i++) {
			for(var j=0; j < this.data[i].length; j++) {
				seq.push(this.data[i][j]);
			}
		}

		return seq;
	}

	Composition.createFromSequence = function(sequence) {
		
		var allowPatternsInSameLevel = function( patternA, patternB ) {
			var nonOverlappedPattern = Composition.nonOverlappedPattern[patternA];
			var len = nonOverlappedPattern.length;

			for (var i = 0; i < nonOverlappedPattern.length; i++) { 
				if (nonOverlappedPattern[i] === parseInt(patternB)) {
					return true;
				}
			}
			return false;
		};

		var layerAllowsPattern = function(layer, pattern) {
			for ( var i=0, len=layer.length; i<len; i++ ) {
				if (!allowPatternsInSameLevel(layer[i], pattern)) {
					return false;
				}
			}
			return true;
		};

		var newComposition = new Composition();
		var layer = [];

		for(var i=0, len=sequence.legnth; i < len; i++) {
			if (layerAllowsPattern(layer, sequence[i])) {
				layer.push(sequence[i]);
			}
			else {
				newComposition.data.push(layer);
				layer = [];
				layer.push(sequence[i]);
			}
		}

		if (layer.length>0) newComposition.data.push(layer);

		return newComposition;
	}

})();