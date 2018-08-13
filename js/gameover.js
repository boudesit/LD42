var gameOver = function(game){
}

gameOver.prototype = {

  	create: function(){

  		  loseSound = game.add.audio('gameover', 1 , true);

        this.spriteBG = this.game.add.tileSprite(0, 0, 525, 900, 'BackgroundGameOver');
        this.spriteBG.animations.add('gameover');
        this.spriteBG.animations.play('gameover', 5, true);

        this.openWindowsSprite = this.game.add.sprite(12, 110, 'animDialogueOpen');
        this.openWindowsSprite.animations.add('OpenDialog', [50]);
        this.openWindowsSprite.animations.play('OpenDialog', 5, true);

  		if (loseSound.isPlaying == false)
  		{
    	    loseSound.play();
    	}else{
    		loseSound.resume();
    	}

      var style = { font: "32px Comic Sans MS", fill: "#ffffff", align: "center" };

      if(this.game.totalEnergy<=0)
      {
         text = game.add.text(50, 200,"You manage to gather " + this.game.totalPassenger + " people but you forgot to pay attention to your fuel gauge... You ran out of fuel in the vicinity of a gravitational singularity... The passengers are looking at you in a funny way... I wonder how you will die...", style);
      }else if(this.game.totalShield<=0) {
        text = game.add.text(50, 200,"You gathered " + this.game.totalPassenger + " people to help you in your quest, and you managed to go this far. But you forgot that space is an unforgivable place... Your shield was completely depleted when a speedy teeny tiny flying rock came to say hello, it went through your hull like it was a sheet of paper and torn it apart. In a blink of an eye, you and your passengers ended up floating in space...", style);
      }

		this.restartButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		this.restartButton.onDown.add(this.playTheGame, this);
	},
	playTheGame: function(){
		loseSound.pause();
		this.game.state.start("TheGame");
	}
}
