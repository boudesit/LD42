function barManager(game) {
	this.game = game;
	this.ressourcesManager = null;
	this.player = null;
	this.computer = null;
	this.lvlManager = null;
	this.beginEvent = true;
	this.spriteBG = null;
	this.fight = null;
	this.fightCastle = null;
	this.computeRessourcesTkt = null;
	this.hero = null;
	this.timeDelay = 0;
	this.game.score = 0;
	this.scoreText = '';
	this.events = null;
  this.button = null;

}

var pourcent = 0;
barManager.prototype.create = function create() {



  //////////////////////////////////////////////////////////
  //////////////////PROGRESS BAR ENERGYBAR/////////////////
  /////////////////////////////////////////////////////////
  this.energyBar = this.game.add.sprite(10, 0, 'progressBar');
	this.energyBar.animations.add('progressBar0', [0], 10, true);
  this.energyBar.animations.add('progressBar10', [1], 10, true);
  this.energyBar.animations.add('progressBar20', [2], 10, true);
  this.energyBar.animations.add('progressBar30', [3], 10, true);
  this.energyBar.animations.add('progressBar40', [4], 10, true);
  this.energyBar.animations.add('progressBar50', [5], 10, true);
  this.energyBar.animations.add('progressBar60', [6], 10, true);
  this.energyBar.animations.add('progressBar70', [7], 10, true);
  this.energyBar.animations.add('progressBar80', [8], 10, true);
  this.energyBar.animations.add('progressBar90', [9], 10, true);
  this.energyBar.animations.add('progressBar100', [10], 10, true);

  //////////////////////////////////////////////////////////
  //////////////////PROGRESS BAR SHIELD////////////////////
  /////////////////////////////////////////////////////////
  this.shield = this.game.add.sprite(100, 0, 'progressBar2');
  this.shield.animations.add('progressBar0', [0], 10, true);
  this.shield.animations.add('progressBar10', [1], 10, true);
  this.shield.animations.add('progressBar20', [2], 10, true);
  this.shield.animations.add('progressBar30', [3], 10, true);
  this.shield.animations.add('progressBar40', [4], 10, true);
  this.shield.animations.add('progressBar50', [5], 10, true);
  this.shield.animations.add('progressBar60', [6], 10, true);
  this.shield.animations.add('progressBar70', [7], 10, true);
  this.shield.animations.add('progressBar80', [8], 10, true);
  this.shield.animations.add('progressBar90', [9], 10, true);
  this.shield.animations.add('progressBar100', [10], 10, true);

  //////////////////////////////////////////////////////////
  //////////////////PROGRESS BAR PASSENGER//////////////////
  /////////////////////////////////////////////////////////
  this.passenger = this.game.add.sprite(200, 0, 'progressBar3');
  this.passenger.animations.add('progressBar0', [0], 10, true);
  this.passenger.animations.add('progressBar10', [1], 10, true);
  this.passenger.animations.add('progressBar20', [2], 10, true);
  this.passenger.animations.add('progressBar30', [3], 10, true);
  this.passenger.animations.add('progressBar40', [4], 10, true);
  this.passenger.animations.add('progressBar50', [5], 10, true);
  this.passenger.animations.add('progressBar60', [6], 10, true);
  this.passenger.animations.add('progressBar70', [7], 10, true);
  this.passenger.animations.add('progressBar80', [8], 10, true);
  this.passenger.animations.add('progressBar90', [9], 10, true);
  this.passenger.animations.add('progressBar100', [10], 10, true);

  //////////////////////////////////////////////////////////
  //////////////////PROGRESS BAR search//////////////////
  /////////////////////////////////////////////////////////
  this.search = this.game.add.sprite(300, 0, 'progressBar4');
  this.search.animations.add('progressBar0', [0], 10, true);
  this.search.animations.add('progressBar10', [1], 10, true);
  this.search.animations.add('progressBar20', [2], 10, true);
  this.search.animations.add('progressBar30', [3], 10, true);
  this.search.animations.add('progressBar40', [4], 10, true);
  this.search.animations.add('progressBar50', [5], 10, true);
  this.search.animations.add('progressBar60', [6], 10, true);
  this.search.animations.add('progressBar70', [7], 10, true);
  this.search.animations.add('progressBar80', [8], 10, true);
  this.search.animations.add('progressBar90', [9], 10, true);
  this.search.animations.add('progressBar100', [10], 10, true);

    this.button = game.add.button(20, 200, 'test', actionOnClick, this, 2, 1, 0);
};


barManager.prototype.update = function update() {


};

barManager.prototype.progressEnergy = function progress(pourcent) {

switch (pourcent) {
  case 0:
  this.energyBar.animations.play('progressBar0', 2, true);
    break;
  case 10:
    this.energyBar.animations.play('progressBar10', 2, true);
    break;
  case 20:
    this.energyBar.animations.play('progressBar20', 2, true);
    break;
  case 30:
    this.energyBar.animations.play('progressBar30', 2, true);
    break;
  case 40:
    this.energyBar.animations.play('progressBar40', 2, true);
    break;
  case 50:
    this.energyBar.animations.play('progressBar50', 2, true);
    break;
  case 60:
    this.energyBar.animations.play('progressBar60', 2, true);
    break;
  case 70:
    this.energyBar.animations.play('progressBar70', 2, true);
    break;
  case 80:
    this.energyBar.animations.play('progressBar80', 2, true);
    break;
  case 90:
    this.energyBar.animations.play('progressBar90', 2, true);
    break;
  case 100:
    this.energyBar.animations.play('progressBar100', 2, true);
     break;
  default:
    this.energyBar.animations.play('progressBar0', 2, true);
}
};


barManager.prototype.progressShield = function progress(pourcent) {

switch (pourcent) {
  case 0:
  this.shield.animations.play('progressBar0', 2, true);
    break;
  case 10:
    this.shield.animations.play('progressBar10', 2, true);
    break;
  case 20:
    this.shield.animations.play('progressBar20', 2, true);
    break;
  case 30:
    this.shield.animations.play('progressBar30', 2, true);
    break;
  case 40:
    this.shield.animations.play('progressBar40', 2, true);
    break;
  case 50:
    this.shield.animations.play('progressBar50', 2, true);
    break;
  case 60:
    this.shield.animations.play('progressBar60', 2, true);
    break;
  case 70:
    this.shield.animations.play('progressBar70', 2, true);
    break;
  case 80:
    this.shield.animations.play('progressBar80', 2, true);
    break;
  case 90:
    this.shield.animations.play('progressBar90', 2, true);
    break;
  case 100:
    this.shield.animations.play('progressBar100', 2, true);
     break;
  default:
    this.shield.animations.play('progressBar0', 2, true);
}
};

barManager.prototype.progresspassenger = function progress(pourcent) {

switch (pourcent) {
  case 0:
  this.passenger.animations.play('progressBar0', 2, true);
    break;
  case 10:
    this.passenger.animations.play('progressBar10', 2, true);
    break;
  case 20:
    this.passenger.animations.play('progressBar20', 2, true);
    break;
  case 30:
    this.passenger.animations.play('progressBar30', 2, true);
    break;
  case 40:
    this.passenger.animations.play('progressBar40', 2, true);
    break;
  case 50:
    this.passenger.animations.play('progressBar50', 2, true);
    break;
  case 60:
    this.passenger.animations.play('progressBar60', 2, true);
    break;
  case 70:
    this.passenger.animations.play('progressBar70', 2, true);
    break;
  case 80:
    this.passenger.animations.play('progressBar80', 2, true);
    break;
  case 90:
    this.passenger.animations.play('progressBar90', 2, true);
    break;
  case 100:
    this.passenger.animations.play('progressBar100', 2, true);
     break;
  default:
    this.passenger.animations.play('progressBar0', 2, true);
}
};

barManager.prototype.progresssearch = function progress(pourcent) {

switch (pourcent) {
  case 0:
  this.search.animations.play('progressBar0', 2, true);
    break;
  case 10:
    this.search.animations.play('progressBar10', 2, true);
    break;
  case 20:
    this.search.animations.play('progressBar20', 2, true);
    break;
  case 30:
    this.search.animations.play('progressBar30', 2, true);
    break;
  case 40:
    this.search.animations.play('progressBar40', 2, true);
    break;
  case 50:
    this.search.animations.play('progressBar50', 2, true);
    break;
  case 60:
    this.search.animations.play('progressBar60', 2, true);
    break;
  case 70:
    this.search.animations.play('progressBar70', 2, true);
    break;
  case 80:
    this.search.animations.play('progressBar80', 2, true);
    break;
  case 90:
    this.search.animations.play('progressBar90', 2, true);
    break;
  case 100:
    this.search.animations.play('progressBar100', 2, true);
     break;
  default:
    this.search.animations.play('progressBar0', 2, true);
}

  barManager.prototype.actionOnClick = function actionOnClick(test) {

    pourcent = pourcent + 10;
    this.progressEnergy(pourcent);
  }
};
