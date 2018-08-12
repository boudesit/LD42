function passengerManager(game) {
  this.game = game;

  this.maxPassenger = 10;
  this.game.totalPassenger = 0;

  this.totalEngineer = 0;
  this.totalSoldier = 0;
  this.totalCivilian = 0;
}


passengerManager.prototype.create = function create() { };


passengerManager.prototype.update = function update() { };

//number can be positive or negative; there is no need for a remove function
passengerManager.prototype.addEngineer = function addEngineer(number) {
  if (this.game.totalPassenger + number > this.maxPassenger) {
    number = this.maxPassenger - this.game.totalPassenger;
  }

  if (this.totalEngineer + number < 0) {
    number = -this.totalEngineer;
  }

  this.totalEngineer += number;
  this.game.totalPassenger += number;

  if (this.game.totalPassenger < 0) {
    this.game.totalPassenger = 0;
  }
};

passengerManager.prototype.addSoldier = function addSoldier(number) {
  if (this.game.totalPassenger + number > this.maxPassenger) {
    number = this.maxPassenger - this.game.totalPassenger;
  }

  if (this.totalSoldier + number < 0) {
    number = -this.totalSoldier;
  }

  this.totalSoldier += number;
  this.game.totalPassenger += number;

  if (this.game.totalPassenger < 0) {
    this.game.totalPassenger = 0;
  }
};

passengerManager.prototype.addCivilian = function addCivilian(number) {
  if (this.game.totalPassenger + number > this.maxPassenger) {
    number = this.maxPassenger - this.game.totalPassenger;
  }

  if (this.totalCivilian + number < 0) {
    number = -this.totalCivilian;
  }

  this.totalCivilian += number;
  this.game.totalPassenger += number;

  if (this.game.totalPassenger < 0) {
    this.game.totalPassenger = 0;
  }
};

passengerManager.prototype.addMaxPassenger = function addMaxPassenger(number) {
  this.maxPassenger += number;
};

passengerManager.prototype.getEngineer = function getEngineer() {
  return this.totalEngineer;
};

passengerManager.prototype.getSoldier = function getSoldier() {
  return this.totalSoldier;
};

passengerManager.prototype.getCivilian = function getCivilian() {
  return this.totalCivilian;
};

passengerManager.prototype.getTotalPassenger = function getTotalPassenger() {
  return this.game.totalPassenger;
};

passengerManager.prototype.getMaxPassenger = function getMaxPassenger() {
  return this.maxPassenger;
};

passengerManager.prototype.toString = function toString() {
  return "Civilian : " + this.totalCivilian + "\n"
    + "Engineer : " + this.totalEngineer + "\n"
    + "Soldier : " + this.totalSoldier + "\n"
    + "Total : " + this.game.totalPassenger + "/" + this.maxPassenger;
};
