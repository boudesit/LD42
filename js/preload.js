var preload = function(game){}

preload.prototype = {
	preload: function(){
        var loadingBar = this.add.sprite(0,0,"loading");
        this.load.setPreloadSprite(loadingBar);

    //Spritesheet
		this.game.load.spritesheet('gametitle', 'assets/images/Backgrounds/background-start.png', 800, 600,6);
		this.game.load.spritesheet('gamescore', 'assets/images/Backgrounds/background-score.png',800, 600,2);
		this.game.load.spritesheet('background', 'assets/images/Backgrounds/background-game.png', 800, 600,12);
		this.game.load.spritesheet('gametuto', 'assets/images/Backgrounds/background-tuto.png', 800, 600,1);

		this.game.load.spritesheet('progressBarEnergy', 'assets/images/ProgressBar/ProgressBarEnergy.png',80,20,10);
		this.game.load.spritesheet('progressBarPassenger', 'assets/images/ProgressBar/ProgressBarPassenger.png',80,20,10);
		this.game.load.spritesheet('progressBarSearch', 'assets/images/ProgressBar/progressBarSearch.png',80,20,10);
		this.game.load.spritesheet('progressBarShield', 'assets/images/ProgressBar/progressBarShield.png',80,20,10);
		//Image

		this.game.load.image('button', 'assets/images/button.png');
		//Sound
    this.game.load.audio('gameSound', 'assets/sound/game.mp3');
    this.game.load.audio('introSound', 'assets/sound/intro.mp3');
    this.game.load.audio('scoreSound', 'assets/sound/score.mp3');
		this.game.load.audio('winSound', 'assets/sound/winSound.mp3');

	},
  	create: function(){
  		this.game.time.events.add(Phaser.Timer.SECOND * 2, this._startGame, this);
	},

	_startGame: function(){
		this.game.state.start("GameTitle");
	}
}
