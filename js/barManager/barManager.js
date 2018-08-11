function barManager(game, passengerManager, resourceManager) {
	this.game = game;
	this.events = null;
  this.passenger=null;
  this.shield=null;
  this.search=null;
  this.energy=null;
  this.passengerManager = passengerManager;
  this.resourceManager = resourceManager;
}

var pourcentEnergy = 100;
var pourcentSearch = 100;
var pourcentShield = 100;
var pourcentPassenger = 100;
barManager.prototype.create = function create() {


  //////////////////////////////////////////////////////////
  //////////////////PROGRESS BAR ENERGYBAR/////////////////
  /////////////////////////////////////////////////////////
  this.energyBar = this.game.add.sprite(10, 0, 'progressBarEnergy');
	this.energyBar.animations.add('progressBar0', [9], 10, true);
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

barManager.prototype.progressEnergy = function progress(pourcentEnergy) {

switch (pourcentEnergy) {
  case (pourcentEnergy<= 0):
  this.energyBar.animations.play('progressBar0', 2, true);
    break;
  case (pourcentEnergy < 10):
    this.energyBar.animations.play('progressBar10', 2, true);
    break;
  case (pourcentEnergy < 20 ):
    this.energyBar.animations.play('progressBar20', 2, true);
    break;
  case (pourcentEnergy < 30):
    this.energyBar.animations.play('progressBar30', 2, true);
    break;
  case (pourcentEnergy < 40):
    this.energyBar.animations.play('progressBar40', 2, true);
    break;
  case (pourcentEnergy < 50):
    this.energyBar.animations.play('progressBar50', 2, true);
    break;
  case (pourcentEnergy < 60):
    this.energyBar.animations.play('progressBar60', 2, true);
    break;
  case (pourcentEnergy < 70):
    this.energyBar.animations.play('progressBar70', 2, true);
    break;
  case (pourcentEnergy < 80):
    this.energyBar.animations.play('progressBar80', 2, true);
    break;
  case (pourcentEnergy < 90):
    this.energyBar.animations.play('progressBar90', 2, true);
    break;
  case (pourcentEnergy <= 100):
    this.energyBar.animations.play('progressBar100', 2, true);
     break;
}
};


barManager.prototype.progressShield = function progress(pourcentShield) {

switch (pourcentShield) {
  case (pourcentShield <= 0):
  this.shield.animations.play('progressBar0', 2, true);
    break;
  case (pourcentShield < 10):
    this.shield.animations.play('progressBar10', 2, true);
    break;
  case (pourcentShield < 20):
    this.shield.animations.play('progressBar20', 2, true);
    break;
  case (pourcentShield < 30):
    this.shield.animations.play('progressBar30', 2, true);
    break;
  case (pourcentShield < 40):
    this.shield.animations.play('progressBar40', 2, true);
    break;
  case (pourcentShield < 50):
    this.shield.animations.play('progressBar50', 2, true);
    break;
  case (pourcentShield < 60):
    this.shield.animations.play('progressBar60', 2, true);
    break;
  case (pourcentShield < 70):
    this.shield.animations.play('progressBar70', 2, true);
    break;
  case (pourcentShield < 80):
    this.shield.animations.play('progressBar80', 2, true);
    break;
  case (pourcentShield < 90):
    this.shield.animations.play('progressBar90', 2, true);
    break;
  case (pourcentShield <= 100):
    this.shield.animations.play('progressBar100', 2, true);
     break;
}
};

barManager.prototype.progressPassenger = function progress(pourcentPassenger,maxPassenger) {

switch (pourcentPassenger) {
  case (pourcentPassenger <= 0):
  this.passenger.animations.play('progressBar0', 2, true);
    break;
  case (pourcentPassenger < maxPassenger/10):
    this.passenger.animations.play('progressBar10', 2, true);
    break;
  case (pourcentPassenger < (maxPassenger/10)*2):
    this.passenger.animations.play('progressBar20', 2, true);
    break;
  case (pourcentPassenger < (maxPassenger/10)*3):
    this.passenger.animations.play('progressBar30', 2, true);
    break;
  case (pourcentPassenger < (maxPassenger/10)*4):
    this.passenger.animations.play('progressBar40', 2, true);
    break;
  case (pourcentPassenger < (maxPassenger/10)*5):
    this.passenger.animations.play('progressBar50', 2, true);
    break;
  case (pourcentPassenger < (maxPassenger/10)*6):
    this.passenger.animations.play('progressBar60', 2, true);
    break;
  case (pourcentPassenger < (maxPassenger/10)*7):
    this.passenger.animations.play('progressBar70', 2, true);
    break;
  case (pourcentPassenger < (maxPassenger/10)*8):
    this.passenger.animations.play('progressBar80', 2, true);
    break;
  case (pourcentPassenger < (maxPassenger/10)*9):
    this.passenger.animations.play('progressBar90', 2, true);
    break;
  case (pourcentPassenger <= (maxPassenger/10)*2):
    this.passenger.animations.play('progressBar100', 2, true);
     break;
  }
};

barManager.prototype.progresssearch = function progress(pourcentSearch) {

switch (pourcentSearch) {
  case (pourcentSearch <= 0):
  this.search.animations.play('progressBar0', 2, true);
    break;
  case (pourcentSearch < 10):
    this.search.animations.play('progressBar10', 2, true);
    break;
  case (pourcentSearch < 20):
    this.search.animations.play('progressBar20', 2, true);
    break;
  case (pourcentSearch < 30):
    this.search.animations.play('progressBar30', 2, true);
    break;
  case (pourcentSearch < 40):
    this.search.animations.play('progressBar40', 2, true);
    break;
  case (pourcentSearch < 50):
    this.search.animations.play('progressBar50', 2, true);
    break;
  case (pourcentSearch < 60):
    this.search.animations.play('progressBar60', 2, true);
    break;
  case (pourcentSearch < 70):
    this.search.animations.play('progressBar70', 2, true);
    break;
  case (pourcentSearch < 80):
    this.search.animations.play('progressBar80', 2, true);
    break;
  case (pourcentSearch < 90):
    this.search.animations.play('progressBar90', 2, true);
    break;
  case (pourcentSearch <= 100):
    this.search.animations.play('progressBar100', 2, true);
     break;
}

  function updateProgessBars(passenger,energy,shield,search)
  {
    if(passenger!=null)
    {
      progresspassenger(passenger);
    }
    if(energy!=null)
    {
      progressEnergy(energy);
    }
    if(shield!=null)
    {
      progressShield(shield);
    }
    if(search!=null)
    {
      progressShield(search);
    }

  }
};
