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
	this.baseConsumption = 0;
	this.passengerConsumption = 0.2;
};

travelManager.prototype.create = function create() { };

travelManager.prototype.update = function update() { };

travelManager.prototype.travel = function travel() {

    let gameState = "continue";

    this.resourceManager.addEnergy(-(this.baseConsumption + (this.passengerManager.getTotalPassenger() * this.passengerConsumption)));
    this.resourceManager.addSearch(this.passengerManager.getEngineer());

    this.barManager.updateProgressBars();

    if(this.resourceManager.getShield() <= 0) {
        this.game.state.start("GameOver");
    } else if (this.resourceManager.getEnergy() <= 0) {
      	this.game.state.start("GameOver");
    } else if (this.passengerManager.getTotalPassenger() >= this.passengerManager.getMaxPassenger()) {
      	this.game.state.start("GameWin");
    }

    this.game.gameState = gameState;
};
