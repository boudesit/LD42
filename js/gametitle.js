var gameTitle = function(game){}

gameTitle.prototype = {
  	create: function(){

  		this.game.introSound = game.add.audio('introSound', 1, true);

      this.spriteBG = this.game.add.tileSprite(0, 0, 525, 900, 'background');
      this.spriteBG.animations.add('gametitle');
      this.spriteBG.animations.play('gametitle', 5, true);

  		this.startButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		  this.startButton.onDown.add(this.playTheGame, this);

  		if (this.game.introSound.isPlaying == false)
  		{
  			this.game.introSound.loop = true;
    	  this.game.introSound.play();
    	}else{
    		this.game.introSound.resume();
    	}
	},
	playTheGame: function(){
		this.game.state.start("GameTuto");
	}
}
