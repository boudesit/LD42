var preload = function(game){}

preload.prototype = {
	preload: function(){
        var loadingBar = this.add.sprite(0,0,"loading");
        this.load.setPreloadSprite(loadingBar);

    //Spritesheet
		this.game.load.image('gametitle', 'assets/images/Backgrounds/Background-intro.png');
		this.game.load.image('gamescore', 'assets/images/Backgrounds/Background.png');
		this.game.load.image('background', 'assets/images/Backgrounds/Background.png');
		this.game.load.image('gametuto', 'assets/images/Backgrounds/Background-tuto.png');
		this.game.load.image('gameover', 'assets/images/Backgrounds/Background-gameover.png');
		this.game.load.image('gamewin', 'assets/images/Backgrounds/Background-gamewin.png');

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
