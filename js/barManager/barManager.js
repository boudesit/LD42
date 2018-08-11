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
  this.passenger = 0;
  this.shield = 100;
  this.search = 100;
  this.energy = 100;

}

barManager.prototype.create = function create() {

  this.passenger = 0;
  this.shield = 100;
  this.search = 100;
  this.energy = 100;

  //////////////////////////////////////////////////////////
  //////////////////PROGRESS BAR ENERGYBAR/////////////////
  /////////////////////////////////////////////////////////
  this.energyBar = this.game.add.sprite(10, 0, 'progressBarEnergy');
	this.energyBar.animations.add('progressBar0', [10], 10, true);
  this.energyBar.animations.add('progressBar10', [9], 10, true);
  this.energyBar.animations.add('progressBar20', [8], 10, true);
  this.energyBar.animations.add('progressBar30', [7], 10, true);
  this.energyBar.animations.add('progressBar40', [6], 10, true);
  this.energyBar.animations.add('progressBar50', [5], 10, true);
  this.energyBar.animations.add('progressBar60', [4], 10, true);
  this.energyBar.animations.add('progressBar70', [3], 10, true);
  this.energyBar.animations.add('progressBar80', [2], 10, true);
  this.energyBar.animations.add('progressBar90', [1], 10, true);
  this.energyBar.animations.add('progressBar100', [0], 10, true);

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

};


barManager.prototype.update = function update() {

};

function progressEnergy() {

  switch (true) {
    case (this.energy <= 0):
      this.energyBar.animations.play('progressBar0', 2, true);
      break;
    case (this.energy < 10):
      this.energyBar.animations.play('progressBar10', 2, true);
      break;
    case (this.energy < 20):
      this.energyBar.animations.play('progressBar20', 2, true);
      break;
    case (this.energy < 30):
      this.energyBar.animations.play('progressBar30', 2, true);
      break;
    case (this.energy < 40):
      this.energyBar.animations.play('progressBar40', 2, true);
      break;
    case (this.energy < 50):
      this.energyBar.animations.play('progressBar50', 2, true);
      break;
    case (this.energy < 60):
      this.energyBar.animations.play('progressBar60', 2, true);
      break;
    case (this.energy < 70):
      this.energyBar.animations.play('progressBar70', 2, true);
      break;
    case (this.energy < 80):
      this.energyBar.animations.play('progressBar80', 2, true);
      break;
    case (this.energy < 90):
      this.energyBar.animations.play('progressBar90', 2, true);
      break;
    case (this.energy <= 100):
      this.energyBar.animations.play('progressBar100', 2, true);
      break;
  }
};


function progressShield() {

  switch (true) {
    case (this.shield <= 0):
      this.shield.animations.play('progressBar0', 2, true);
      break;
    case (this.shield < 10):
      this.shield.animations.play('progressBar10', 2, true);
      break;
    case (this.shield < 20):
      this.shield.animations.play('progressBar20', 2, true);
      break;
    case (this.shield < 30):
      this.shield.animations.play('progressBar30', 2, true);
      break;
    case (this.shield < 40):
      this.shield.animations.play('progressBar40', 2, true);
      break;
    case (this.shield < 50):
      this.shield.animations.play('progressBar50', 2, true);
      break;
    case (this.shield < 60):
      this.shield.animations.play('progressBar60', 2, true);
      break;
    case (this.shield < 70):
      this.shield.animations.play('progressBar70', 2, true);
      break;
    case (this.shield < 80):
      this.shield.animations.play('progressBar80', 2, true);
      break;
    case (this.shield < 90):
      this.shield.animations.play('progressBar90', 2, true);
      break;
    case (this.shield <= 100):
      this.shield.animations.play('progressBar100', 2, true);
      break;
  }
};

function progressPassenger() {

  switch (true) {
    case (this.passenger <= 0):
      this.passenger.animations.play('progressBar0', 2, true);
      break;
    case (this.passenger < 10):
      this.passenger.animations.play('progressBar10', 2, true);
      break;
    case (this.passenger < 20):
      this.passenger.animations.play('progressBar20', 2, true);
      break;
    case (this.passenger < 30):
      this.passenger.animations.play('progressBar30', 2, true);
      break;
    case (this.passenger < 40):
      this.passenger.animations.play('progressBar40', 2, true);
      break;
    case (this.passenger < 50):
      this.passenger.animations.play('progressBar50', 2, true);
      break;
    case (this.passenger < 60):
      this.passenger.animations.play('progressBar60', 2, true);
      break;
    case (this.passenger < 70):
      this.passenger.animations.play('progressBar70', 2, true);
      break;
    case (this.passenger < 80):
      this.passenger.animations.play('progressBar80', 2, true);
      break;
    case (this.passenger < 90):
      this.passenger.animations.play('progressBar90', 2, true);
      break;
    case (this.passenger <= 100):
      this.passenger.animations.play('progressBar100', 2, true);
      break;
  }
};

function progressSearch() {

  switch (true) {
    case (this.search <= 0):
      this.search.animations.play('progressBar0', 2, true);
      break;
    case (this.search < 10):
      this.search.animations.play('progressBar10', 2, true);
      break;
    case (this.search < 20):
      this.search.animations.play('progressBar20', 2, true);
      break;
    case (this.search < 30):
      this.search.animations.play('progressBar30', 2, true);
      break;
    case (this.search < 40):
      this.search.animations.play('progressBar40', 2, true);
      break;
    case (this.search < 50):
      this.search.animations.play('progressBar50', 2, true);
      break;
    case (this.search < 60):
      this.search.animations.play('progressBar60', 2, true);
      break;
    case (this.search < 70):
      this.search.animations.play('progressBar70', 2, true);
      break;
    case (this.search < 80):
      this.search.animations.play('progressBar80', 2, true);
      break;
    case (this.search < 90):
      this.search.animations.play('progressBar90', 2, true);
      break;
    case (this.search <= 100):
      this.search.animations.play('progressBar100', 2, true);
      break;
  }

};

function updateProgessBars(mPassenger, mEnergy, mShield, mSearch) {
  if (mPassenger != null) {
    this.passenger += mPassenger
    this.progressPassenger();
  }
  if (mEnergy != null) {
    console.log(this.energy);
    this.energy += mEnergy
    this.progressEnergy();
  }
  if (mShield != null) {
    this.shield += mShield
    this.progressShield();
  }
  if (mSearch != null) {
    this.search += mSearch
    this.progressSearch();
  }

}
