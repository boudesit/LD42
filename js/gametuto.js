var gameTuto = function(game){}

gameTuto.prototype = {
  	create: function(){

      this.spriteBG = this.game.add.tileSprite(0, 0, 525, 900, 'background');
      this.spriteBG.animations.add('gametuto');
      this.spriteBG.animations.play('gametuto', 5, true);

  		this.startButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		  this.startButton.onDown.add(this.playTheGame, this);

  		if (this.game.introSound.isPlaying == false)
  		{
  			this.game.introSound.loop = true;
    	  this.game.introSound.play();
    	}else{
    		this.game.introSound.resume();
    	}

      var style = {
        font: "bold 16px Arial",
        fill: "#fff",
        boundsAlignH: "center",
        boundsAlignV: "middle",
        wordWrap: true,
        wordWrapWidth: 450
      };

	    this.openWindowsSprite = this.game.add.sprite(12, 110, 'animDialogueOpen');
      this.openWindowsSprite.animations.add('OpenDialog', [50]);
      this.openWindowsSprite.animations.play('OpenDialog', 5, true);

      text = game.add.text(50, 200,"In a galaxy besets by war between royal households determined to gain control over it one way or another, a man sets off on a quest with the objective to gather as much people as he can in order to rebuild the Human civilization in a better place. You are that man. Aboard your ship you will have to travel the galaxy, from system to system and from planet to planet, in search for people willing to join you and help you build a sustainable colony. But be wary, who knows what lurks in the darkness of space...", style);

	},
	playTheGame: function(){
		this.game.introSound.pause();
		this.game.state.start("TheGame");
	}
}
