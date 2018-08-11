function passengerManager(game) {
	this.game = game;

  this.maxPassenger = 10;
  this.totalPassenger = 0;

  this.totalEngineer = 0;
  this.totalSoldier = 0;
  this.totalCivilian = 0;
}


passengerManager.prototype.create = function create() {};


passengerManager.prototype.update = function update() {};

passengerManager.prototype.addEngineer = function addEngineer(number){
  this.totalEngineer += number;
  this.totalPassenger += number;
};

passengerManager.prototype.addSoldier = function addSoldier(number){
  this.totalSoldier += number;
  this.totalPassenger += number;
};

passengerManager.prototype.addCivilian = function addCivilian(number){
  this.totalCivilian += number;
  this.totalPassenger += number;
};

passengerManager.prototype.removeEngineer = function removeEngineer(number){
  this.totalEngineer -= number;
  this.totalPassenger -= number;
};

passengerManager.prototype.removeSoldier = function removeSoldier(number){
  this.totalSoldier -= number;
  this.totalPassenger -= number;
};

passengerManager.prototype.removeCivilian = function removeCivilian(number){
  this.totalCivilian -= number;
  this.totalPassenger -= number;
};

passengerManager.prototype.addMaxPassenger = function addMaxPassenger(number){
  this.maxPassenger += number;
};

passengerManager.prototype.removeMaxPassenger = function removeMaxPassenger(number){
  this.maxPassenger -= number;
};

passengerManager.prototype.getEngineer = function getEngineer(){

  return this.totalEngineer;
};

passengerManager.prototype.getSoldier = function getSoldier(){

  return this.totalSoldier;
};

passengerManager.prototype.getCivilian = function getCivilian(){

  return this.totalCivilian;
};

passengerManager.prototype.getTotalPassenger = function getTotalPassenger(){

  return this.totalPassenger;
};

passengerManager.prototype.getMaxPassenger = function getMaxPassenger(){

  return this.maxPassenger;
};

passengerManager.prototype.toString = function toString() {
  return "Civilian : " + this.totalCivilian + "\n"
      + "Engineer : " + this.totalEngineer + "\n"
      + "Soldier : " + this.totalSoldier + "\n"
      + "Total : " + this.totalPassenger + "/" + this.maxPassenger;
};