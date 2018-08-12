function travelManager(game, passengerManager, resourceManager, barManager) {
	this.game = game;
	this.beginEvent = true;
	this.events = null;
	this.currentEvent = null;
	this.nextEventId = null;
	this.canClickButton = true;
	this.passengerManager = passengerManager;
	this.resourceManager = resourceManager;
	this.barManager = barManager;
};

travelManager.prototype.create = function create() { };

travelManager.prototype.update = function update() { };

travelManager.prototype.travel = function travel() {
    let gameState = "continue";

    this.resourceManager.addEnergy(-this.passengerManager.getTotalPassenger());
    this.resourceManager.addSearch(this.passengerManager.getEngineer());

    this.barManager.updateProgressBars();

    if(this.resourceManager.getShield() <= 0) {
        gameState = "shieldEmpty";
    } else if (this.resourceManager.getEnergy() <= 0) {
        gameState = "energydEmpty";
    } else if (this.passengerManager.getTotalPassenger() >= this.passengerManager.getMaxPassenger()) {
        gameState = "passengerFull";
    }

    this.game.gameState = gameState;
}