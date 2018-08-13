var gameWin = function(game){
}

gameWin.prototype = {
  create: function(){
      winSound = game.add.audio('gameover', 1 , true);
      this.spriteBG = this.game.add.tileSprite(0, 0, 525, 900, 'backgroundWin');
      this.spriteBG.animations.add('gamewin');
      this.spriteBG.animations.play('gamewin', 5, true);

      if (winSound.isPlaying == false)
      {
          winSound.play();
      }else{
          winSound.resume();
      }

      this.openWindowsSprite = this.game.add.sprite(12, 110, 'animDialogueOpen');
      this.openWindowsSprite.animations.add('OpenDialog', [50]);
      this.openWindowsSprite.animations.play('OpenDialog', 5, true);

      var style = {
      	font: "bold 16px Arial",
      	fill: "#fff",
      	boundsAlignH: "center",
      	boundsAlignV: "middle",
      	wordWrap: true,
      	wordWrapWidth: 450
      };

      text = game.add.text(50, 200,"Congratulation ! You have gathered "+ this.game.totalPassenger +" people, that is enough to put your plan in motion, but that was the easiest part. Now the real deal begins !" , style);

    this.restartButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.restartButton.onDown.add(this.playTheGame, this);
  },

  playTheGame: function(){
    winSound.pause();
    this.game.state.start("TheGame");
  }
}
