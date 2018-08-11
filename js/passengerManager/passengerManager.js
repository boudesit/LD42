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

//number can be positive or negative; there is no need for a remove function
passengerManager.prototype.addEngineer = function addEngineer(number){
  if(this.totalPassenger + number > this.maxPassenger) {
    number = this.maxPassenger - this.totalPassenger;
  }
  this.totalEngineer += number;
  this.totalPassenger += number;
  if(this.totalEngineer < 0) {
    this.totalEngineer = 0;
  }
  if(this.totalPassenger < 0){
    this.totalPassenge = 0;
  }
};

passengerManager.prototype.addSoldier = function addSoldier(number){
  if(this.totalPassenger + number > this.maxPassenger) {
    number = this.maxPassenger - this.totalPassenger;
  }
  this.totalSoldier += number;
  this.totalPassenger += number;
  if(this.totalSoldier < 0) {
    this.totalSoldier = 0;
  }
  if(this.totalPassenger < 0){
    this.totalPassenge = 0;
  }
};

passengerManager.prototype.addCivilian = function addCivilian(number){
  if(this.totalPassenger + number > this.maxPassenger) {
    number = this.maxPassenger - this.totalPassenger;
  }
  this.totalCivilian += number;
  this.totalPassenger += number;
  if(this.totalCivilian < 0) {
    this.totalCivilian = 0;
  }
  if(this.totalPassenger < 0){
    this.totalPassenge = 0;
  }
};

passengerManager.prototype.addMaxPassenger = function addMaxPassenger(number){
  this.maxPassenger += number;
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