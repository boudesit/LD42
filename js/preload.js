var preload = function(game){}

preload.prototype = {
	preload: function(){
        var loadingBar = this.add.sprite(0,0,"loading");
        this.load.setPreloadSprite(loadingBar);

    //Spritesheet
		this.game.load.spritesheet('background', 'assets/images/Backgrounds/Background.png',525,900, 41);
		this.game.load.spritesheet('backgroundWin', 'assets/images/Backgrounds/BackgroundWin.png',525,900, 2);
		this.game.load.spritesheet('BackgroundGameOver', 'assets/images/Backgrounds/BackgroundGameOver.png',525,900, 2);
		this.game.load.spritesheet('BackgroundIntro', 'assets/images/Backgrounds/Background-intro.png',525,900, 10);

		this.game.load.spritesheet('background_cockpit', 'assets/images/Backgrounds/BackgroundCockpit.png',525,900, 7);

		this.game.load.spritesheet('animDialogueOpen', 'assets/images/Anim/AnimDialogue-0.png',500,500, 51);


		this.game.load.spritesheet('progressBarEnergy', 'assets/images/ProgressBar/ProgressBarEnergy.png',80,20,11);
		this.game.load.spritesheet('progressBarPassenger', 'assets/images/ProgressBar/ProgressBarPassenger.png',80,20,11);
		this.game.load.spritesheet('progressBarSearch', 'assets/images/ProgressBar/ProgressBarSearch.png',80,20,11);
		this.game.load.spritesheet('progressBarShield', 'assets/images/ProgressBar/ProgressBarShield.png',80,20,11);
		this.game.load.spritesheet('logoEnergy', 'assets/images/ProgressBar/LogoEnergy.png',20,20,9);
		this.game.load.spritesheet('logoSearch', 'assets/images/ProgressBar/LogoSearch.png',20,20,8);
		this.game.load.spritesheet('logoShield', 'assets/images/ProgressBar/LogoShield.png',20,20,11);
		this.game.load.spritesheet('continue', 'assets/images/Continue.png',175,20,2);
		this.game.load.spritesheet('logoPassenger', 'assets/images/ProgressBar/LogoPassenger.png',20,20,4);

		this.game.load.spritesheet('animResponseOpen', 'assets/images/Anim/Anim_1reponses.png', 525,204,10);

		//Image

		this.game.load.image('button', 'assets/images/button.png');
		//Sound
    this.game.load.audio('gameSound', 'assets/sound/game.wav');
    this.game.load.audio('introSound', 'assets/sound/intro.wav');
		this.game.load.audio('gameover', 'assets/sound/gameover.wav');
		this.game.load.audio('gamewin', 'assets/sound/gamewin.wav');
		this.game.load.audio('soundClick', 'assets/sound/select.wav');
		this.game.load.audio('event', 'assets/sound/event.wav');
	},
  	create: function(){
  		this.game.time.events.add(Phaser.Timer.SECOND * 2, this._startGame, this);
	},

	_startGame: function(){
		this.game.state.start("GameTitle");
	}
}
