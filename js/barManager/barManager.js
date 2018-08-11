function barManager(game, passengerManager, resourceManager) {
  this.game = game;
  this.events = null;
  this.passenger = null;
  this.shield = null;
  this.search = null;
  this.energy = null;
  this.passengerManager = passengerManager;
  this.resourceManager = resourceManager;
  this.numberText = null;
}

barManager.prototype.create = function create() {

  this.numberText = this.game.add.text(360, 20, this.passengerManager.getTotalPassenger() + "/" + this.passengerManager.getMaxPassenger(), style);

  //////////////////////////////////////////////////////////
  //////////////////PROGRESS BAR ENERGYBAR/////////////////
  /////////////////////////////////////////////////////////
  this.energy = this.game.add.sprite(10, 0, 'progressBarEnergy');
  this.energy.animations.add('progressBar0', [10], 10, true);
  this.energy.animations.add('progressBar10', [9], 10, true);
  this.energy.animations.add('progressBar20', [8], 10, true);
  this.energy.animations.add('progressBar30', [7], 10, true);
  this.energy.animations.add('progressBar40', [6], 10, true);
  this.energy.animations.add('progressBar50', [5], 10, true);
  this.energy.animations.add('progressBar60', [4], 10, true);
  this.energy.animations.add('progressBar70', [3], 10, true);
  this.energy.animations.add('progressBar80', [2], 10, true);
  this.energy.animations.add('progressBar90', [1], 10, true);
  this.energy.animations.add('progressBar100', [0], 10, true);

  //////////////////////////////////////////////////////////
  //////////////////PROGRESS BAR SHIELD////////////////////
  /////////////////////////////////////////////////////////
  this.shield = this.game.add.sprite(150, 0, 'progressBarShield');
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
  this.passenger = this.game.add.sprite(350, 0, 'progressBarPassenger');
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
  this.search = this.game.add.sprite(250, 0, 'progressBarSearch');
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
  switch (true) {
    case (pourcentEnergy <= 0):
      this.energy.animations.play('progressBar10', 2, true);
      break;
    case (pourcentEnergy < 10):
      this.energy.animations.play('progressBar10', 2, true);
      break;
    case (pourcentEnergy < 20):
      this.energy.animations.play('progressBar20', 2, true);
      break;
    case (pourcentEnergy < 30):
      this.energy.animations.play('progressBar30', 2, true);
      break;
    case (pourcentEnergy < 40):
      this.energy.animations.play('progressBar40', 2, true);
      break;
    case (pourcentEnergy < 50):
      this.energy.animations.play('progressBar50', 2, true);
      break;
    case (pourcentEnergy < 60):
      this.energy.animations.play('progressBar60', 2, true);
      break;
    case (pourcentEnergy < 70):
      this.energy.animations.play('progressBar70', 2, true);
      break;
    case (pourcentEnergy < 80):
      this.energy.animations.play('progressBar80', 2, true);
      break;
    case (pourcentEnergy < 90):
      this.energy.animations.play('progressBar90', 2, true);
      break;
    case (pourcentEnergy <= 100):
      this.energy.animations.play('progressBar100', 2, true);
      break;
  }
};


barManager.prototype.progressShield = function progress(pourcentShield) {
  switch (true) {
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
      this.shield.animations.play('progressBar90', 2, true);
      break;
  }
};

barManager.prototype.progressPassenger = function progress(pourcentPassenger) {
  switch (true) {
    case (pourcentPassenger <= 0):
      this.passenger.animations.play('progressBar0', 2, true);
      break;
    case (pourcentPassenger <= this.passengerManager.getMaxPassenger() / 10):
      this.passenger.animations.play('progressBar10', 2, true);
      break;
    case (pourcentPassenger <= (this.passengerManager.getMaxPassenger() / 10) * 2):
      this.passenger.animations.play('progressBar20', 2, true);
      break;
    case (pourcentPassenger <= (this.passengerManager.getMaxPassenger() / 10) * 3):
      this.passenger.animations.play('progressBar30', 2, true);
      break;
    case (pourcentPassenger <= (this.passengerManager.getMaxPassenger() / 10) * 4):
      this.passenger.animations.play('progressBar40', 2, true);
      break;
    case (pourcentPassenger <= (this.passengerManager.getMaxPassenger() / 10) * 5):
      this.passenger.animations.play('progressBar50', 2, true);
      break;
    case (pourcentPassenger <= (this.passengerManager.getMaxPassenger() / 10) * 6):
      this.passenger.animations.play('progressBar60', 2, true);
      break;
    case (pourcentPassenger < (this.passengerManager.getMaxPassenger() / 10) * 7):
      this.passenger.animations.play('progressBar70', 2, true);
      break;
    case (pourcentPassenger <= (this.passengerManager.getMaxPassenger() / 10) * 8):
      this.passenger.animations.play('progressBar80', 2, true);
      break;
    case (pourcentPassenger <= (this.passengerManager.getMaxPassenger() / 10) * 9):
      this.passenger.animations.play('progressBar90', 2, true);
      break;
    case (pourcentPassenger <= this.passengerManager.getMaxPassenger()):
      this.passenger.animations.play('progressBar90', 2, true);
      break;
  }
  this.numberText.destroy();
  this.numberText = this.game.add.text(360, 20, this.passengerManager.getTotalPassenger() + "/" + this.passengerManager.getMaxPassenger(), style);
};

barManager.prototype.progressSearch = function progress(pourcentSearch) {
  switch (true) {
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
      this.search.animations.play('progressBar90', 2, true);
      break;
  }
};

barManager.prototype.updateProgessBars = function updateProgessBars() {

  console.log('bonjour0');
  this.progressPassenger(this.passengerManager.getTotalPassenger());
  this.progressEnergy(this.resourceManager.getEnergy());
  this.progressShield(this.resourceManager.getShield());
  this.progressSearch(this.resourceManager.getSearch());

};
