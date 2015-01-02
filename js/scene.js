(function(){
	var game = this.colorQuestGame = this.colorQuestGame || {};

	var scene = {
		node: document.querySelector('.scene'),
		show: function() {
			this.node.classList.remove('out');
			this.node.classList.add('in');
		},
		hide: function() {
			this.node.classList.remove('in');
			this.node.classList.add('out');
		}
	};

	// scene instances code to go here.
	var gameScene = game.gameScene = Object.create(scene);
	gameScene.node = document.getElementById('game-scene');
	gameScene.handleInput = function() {
		// document.getElementById('finish-btn').onclick = function () {
		// 	game.flow.finishLevel();
		// };

		// document.getElementById('gameover-btn').onclick = function() {
		// 	game.flow.gameOver();
		// };

	};

	gameScene.visualise = function(quest) {
		var questData = quest.data;
		var patternsToShow = [];
		for (var i in questData) {
			for (var j in questData[i]) {
				patternsToShow.push(questData[i][j]);
			}
		}

		var questCompositionNode = document.getElementById('quest-composition');
		questCompositionNode.removeAllChildren();

		for (var i in patternsToShow) {
			var patternNode = document.querySelector('#element-template .pattern').cloneNode(/*clone children*/true);
			patternNode.setAttribute('data-pattern', patternsToShow[i]);
			questCompositionNode.appendChild(patternNode);
		}

		patternsToShow.sort(function(a, b) {
			return Math.random() - 0.5;
		});

		var deckNode = document.getElementById('deck');
		deckNode.removeAllChildren();

		for (var i in patternsToShow) {
			var patternSlotNode = document.querySelector('#element-template .pattern-slot').cloneNode(/*clone children*/true);
			patternSlotNode.querySelector('.pattern').setAttribute('data-pattern', patternsToShow[i]);
			deckNode.appendChild(patternSlotNode);
		}

	};


	var startScene = game.startScene = Object.create(scene);
	startScene.node =  document.getElementById('start-scene');
	startScene.handleInput = function() {
		document.getElementById('start-btn').onclick = function() {
			game.flow.nextLevel();
		};
	};

	var summaryScene = game.summaryScene = Object.create(scene);
	summaryScene.node = document.getElementById('summary-scene');
	summaryScene.handleInput = function() {
		document.getElementById('next-level-button').onclick = function() {
			game.flow.nextLevel();
		};
	};

	var gameoverScene = game.gameoverScene = Object.create(scene);
	gameoverScene.node = document.getElementById('gameover-scene');
	gameoverScene.handleInput = function() {
		var scene = this;
		document.getElementById('back-to-menu-button').onclick = function() {
			game.flow.startOver();
		};
	};

})();