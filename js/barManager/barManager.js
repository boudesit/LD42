function barManager(game, passengerManager) {
	this.game = game;
	this.events = null;
  this.passengerBar=null;
  this.shieldBar=null;
  this.searchBar=null;
  this.energyBar =null;
	this.passengerManager = passengerManager;
}

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
	this.energyBar.animations.frame = 9;
	this.energyBar.animations.play('progressBar100', 2, true);

  //////////////////////////////////////////////////////////
  //////////////////PROGRESS BAR SHIELD////////////////////
  /////////////////////////////////////////////////////////
  this.shieldBar = this.game.add.sprite(100, 0, 'progressBarShield');
  this.shieldBar.animations.add('progressBar0', [9], 10, true);
  this.shieldBar.animations.add('progressBar10', [9], 10, true);
  this.shieldBar.animations.add('progressBar20', [8], 10, true);
  this.shieldBar.animations.add('progressBar30', [7], 10, true);
  this.shieldBar.animations.add('progressBar40', [6], 10, true);
  this.shieldBar.animations.add('progressBar50', [5], 10, true);
  this.shieldBar.animations.add('progressBar60', [4], 10, true);
  this.shieldBar.animations.add('progressBar70', [3], 10, true);
  this.shieldBar.animations.add('progressBar80', [2], 10, true);
  this.shieldBar.animations.add('progressBar90', [1], 10, true);
  this.shieldBar.animations.add('progressBar100', [0], 10, true);

	this.shieldBar.animations.play('progressBar100', 2, true);

  //////////////////////////////////////////////////////////
  //////////////////PROGRESS BAR PASSENGER//////////////////
  /////////////////////////////////////////////////////////
  this.passengerBar = this.game.add.sprite(200, 0, 'progressBarPassenger');
  this.passengerBar.animations.add('progressBar0', [9], 10, true);
  this.passengerBar.animations.add('progressBar10', [9], 10, true);
  this.passengerBar.animations.add('progressBar20', [8], 10, true);
  this.passengerBar.animations.add('progressBar30', [7], 10, true);
  this.passengerBar.animations.add('progressBar40', [6], 10, true);
  this.passengerBar.animations.add('progressBar50', [5], 10, true);
  this.passengerBar.animations.add('progressBar60', [4], 10, true);
  this.passengerBar.animations.add('progressBar70', [3], 10, true);
  this.passengerBar.animations.add('progressBar80', [2], 10, true);
  this.passengerBar.animations.add('progressBar90', [1], 10, true);
  this.passengerBar.animations.add('progressBar100', [0], 10, true);

	this.passengerBar.animations.play('progressBar0', 2, true);


  //////////////////////////////////////////////////////////
  //////////////////PROGRESS BAR search//////////////////
  /////////////////////////////////////////////////////////
  this.searchBar = this.game.add.sprite(300, 0, 'progressBarSearch');
  this.searchBar.animations.add('progressBar0', [9], 10, true);
  this.searchBar.animations.add('progressBar10', [9], 10, true);
  this.searchBar.animations.add('progressBar20', [8], 10, true);
  this.searchBar.animations.add('progressBar30', [7], 10, true);
  this.searchBar.animations.add('progressBar40', [6], 10, true);
  this.searchBar.animations.add('progressBar50', [5], 10, true);
  this.searchBar.animations.add('progressBar60', [4], 10, true);
  this.searchBar.animations.add('progressBar70', [3], 10, true);
  this.searchBar.animations.add('progressBar80', [2], 10, true);
  this.searchBar.animations.add('progressBar90', [1], 10, true);
  this.searchBar.animations.add('progressBar100', [0], 10, true);

	this.searchBar.animations.play('progressBar0', 2, true);

};


barManager.prototype.update = function update() {};

barManager.prototype.progressEnergy = function progressEnergy(pourcentEnergy) {

switch (true) {
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


barManager.prototype.progressShield = function progressShield(pourcentShield) {

switch (true) {
	  case (pourcentShield <= 0):
	  this.shieldBar.animations.play('progressBar0', 2, true);
	    break;
	  case (pourcentShield < 10):
	    this.shieldBar.animations.play('progressBar10', 2, true);
	    break;
	  case (pourcentShield < 20):
	    this.shieldBar.animations.play('progressBar20', 2, true);
	    break;
	  case (pourcentShield < 30):
	    this.shieldBar.animations.play('progressBar30', 2, true);
	    break;
	  case (pourcentShield < 40):
	    this.shieldBar.animations.play('progressBar40', 2, true);
	    break;
	  case (pourcentShield < 50):
	    this.shieldBar.animations.play('progressBar50', 2, true);
	    break;
	  case (pourcentShield < 60):
	    this.shieldBar.animations.play('progressBar60', 2, true);
	    break;
	  case (pourcentShield < 70):
	    this.shieldBar.animations.play('progressBar70', 2, true);
	    break;
	  case (pourcentShield < 80):
	    this.shieldBar.animations.play('progressBar80', 2, true);
	    break;
	  case (pourcentShield < 90):
	    this.shieldBar.animations.play('progressBar90', 2, true);
	    break;
	  case (pourcentShield <= 100):
	    this.shieldBar.animations.play('progressBar100', 2, true);
	     break;
	}
};

barManager.prototype.progressPassenger = function progressPassenger(pourcentPassenger) {

switch (true) {
	  case (pourcentPassenger <= 0):
	  this.passengerBar.animations.play('progressBar0', 2, true);
	    break;
	  case (pourcentPassenger < this.passengerManager.getMaxPassenger()/10):
	    this.passengerBar.animations.play('progressBar10', 2, true);
	    break;
	  case (pourcentPassenger < (this.passengerManager.getMaxPassenger()/10)*2):
	    this.passengerBar.animations.play('progressBar20', 2, true);
	    break;
	  case (pourcentPassenger < (this.passengerManager.getMaxPassenger()/10)*3):
	    this.passengerBar.animations.play('progressBar30', 2, true);
	    break;
	  case (pourcentPassenger < (this.passengerManager.getMaxPassenger()/10)*4):
	    this.passengerBar.animations.play('progressBar40', 2, true);
	    break;
	  case (pourcentPassenger < (this.passengerManager.getMaxPassenger()/10)*5):
	    this.passengerBar.animations.play('progressBar50', 2, true);
	    break;
	  case (pourcentPassenger < (this.passengerManager.getMaxPassenger()/10)*6):
	    this.passengerBar.animations.play('progressBar60', 2, true);
	    break;
	  case (pourcentPassenger < (this.passengerManager.getMaxPassenger()/10)*7):
	    this.passengerBar.animations.play('progressBar70', 2, true);
	    break;
	  case (pourcentPassenger < (this.passengerManager.getMaxPassenger()/10)*8):
	    this.passengerBar.animations.play('progressBar80', 2, true);
	    break;
	  case (pourcentPassenger < (this.passengerManager.getMaxPassenger()/10)*9):
	    this.passengerBar.animations.play('progressBar90', 2, true);
	    break;
	  case (pourcentPassenger <= this.passengerManager.getMaxPassenger()):
	    this.passengerBar.animations.play('progressBar100', 2, true);
	     break;
	  }
};

barManager.prototype.progressSearch = function progressSearch(pourcentSearch) {
true
switch (pourcentSearch) {
  case (pourcentSearch <= 0):
  this.searchBar.animations.play('progressBar0', 2, true);
    break;
  case (pourcentSearch < 10):
    this.searchBar.animations.play('progressBar10', 2, true);
    break;
  case (pourcentSearch < 20):
    this.searchBar.animations.play('progressBar20', 2, true);
    break;
  case (pourcentSearch < 30):
    this.searchBar.animations.play('progressBar30', 2, true);
    break;
  case (pourcentSearch < 40):
    this.searchBar.animations.play('progressBar40', 2, true);
    break;
  case (pourcentSearch < 50):
    this.searchBar.animations.play('progressBar50', 2, true);
    break;
  case (pourcentSearch < 60):
    this.searchBar.animations.play('progressBar60', 2, true);
    break;
  case (pourcentSearch < 70):
    this.searchBar.animations.play('progressBar70', 2, true);
    break;
  case (pourcentSearch < 80):
    this.searchBar.animations.play('progressBar80', 2, true);
    break;
  case (pourcentSearch < 90):
    this.searchBar.animations.play('progressBar90', 2, true);
    break;
  case (pourcentSearch <= 100):
    this.searchBar.animations.play('progressBar100', 2, true);
     break;
	 }
};

  barManager.prototype.updateProgessBars = function updateProgessBars(passenger,energy,shield,search)
  {
    if(passenger!=null)
    {
      this.progressPassenger(passenger);
    }
    if(energy!=null)
    {
      this.progressEnergy(energy);
    }
    if(shield!=null)
    {
      this.progressShield(shield);
    }
    if(search!=null)
    {
      this.progressSearch(search);
    }

  };
