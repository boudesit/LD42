var gameWin = function(game){
}

gameWin.prototype = {
  create: function(){
      winSound = game.add.audio('winSound', 1 , true);
      this.spriteBG = this.game.add.tileSprite(0, 0, 525, 900, 'gamewin');
      this.spriteBG.animations.add('gamewin');
      this.spriteBG.animations.play('gamewin', 2, true);
      if (winSound.isPlaying == false)
      {
          winSound.play();
      }else{
          winSound.resume();
      }

      var style = { font: "32px Comic Sans MS", fill: "#ffffff", align: "center" };
    	text = game.add.text(0, 100,"Total Energy : " +this.game.totalEnergy, style);
      text = game.add.text(0, 200,"Total Search : " this.game.totalSearch, style);
      text = game.add.text(0, 300,"Total Shield : "  this.game.totalShield, style);
      
    this.restartButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.restartButton.onDown.add(this.playTheGame, this);
  },

  playTheGame: function(){
    winSound.pause();
    this.game.state.start("TheGame");
  }
}
