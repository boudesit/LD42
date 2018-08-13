var preload = function(game){}

preload.prototype = {
	preload: function(){
        var loadingBar = this.add.sprite(0,0,"loading");
        this.load.setPreloadSprite(loadingBar);

    //Spritesheet
		this.game.load.spritesheet('background', 'assets/images/Backgrounds/Background.png',525,900, 41);
		this.game.load.spritesheet('background_cockpit', 'assets/images/Backgrounds/BackgroundCockpit.png',525,900, 7);

		this.game.load.spritesheet('animDialogueOpen', 'assets/images/Anim/AnimDialogue-0.png',500,500, 51);


		this.game.load.spritesheet('progressBarEnergy', 'assets/images/ProgressBar/ProgressBarEnergy.png',80,20,10);
		this.game.load.spritesheet('progressBarPassenger', 'assets/images/ProgressBar/ProgressBarPassenger.png',100,20,32);
		this.game.load.spritesheet('progressBarSearch', 'assets/images/ProgressBar/progressBarSearch.png',80,20,10);
		this.game.load.spritesheet('progressBarShield', 'assets/images/ProgressBar/progressBarShield.png',80,20,10);
		this.game.load.spritesheet('logoEnergy', 'assets/images/ProgressBar/logoEnergy.png',20,20,9);
		this.game.load.spritesheet('logoSearch', 'assets/images/ProgressBar/logoSearch.png',20,20,8);
		this.game.load.spritesheet('logoShield', 'assets/images/ProgressBar/logoShield.png',20,20,11);
		this.game.load.spritesheet('continue', 'assets/images/Continue.png',175,20,2);
		//Image

		this.game.load.image('button', 'assets/images/button.png');
		//Sound
    this.game.load.audio('gameSound', 'assets/sound/game.wav');
    this.game.load.audio('introSound', 'assets/sound/intro.wav');
		this.game.load.audio('gameover', 'assets/sound/gameover.wav');

	},
  	create: function(){
  		this.game.time.events.add(Phaser.Timer.SECOND * 2, this._startGame, this);
	},

	_startGame: function(){
		this.game.state.start("GameTitle");
	}
}
