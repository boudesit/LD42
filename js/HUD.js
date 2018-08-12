function HUD(game) {
	this.game = game;
	this.barManager = null;
	this.eventManager = null;
	this.passengerManager = null;
	this.resourceManager = null;
	this.timeDelay = null;
};
var buttonPlus;

var style = {
	font: "bold 16px Arial",
	fill: "#fff",
	boundsAlignH: "center",
	boundsAlignV: "middle",
	wordWrap: true,
	wordWrapWidth: 450
};

HUD.prototype.create = function create() {
	this.timeDelay = 0;

	this.passengerManager = new passengerManager();
	this.resourceManager = new resourceManager();

	this.barManager = new barManager(this.game, this.passengerManager, this.resourceManager);
	this.barManager.create();

	this.travelManager = new travelManager(this.game, this.passengerManager, this.resourceManager, this.barManager);

	this.eventManager = new eventManager(this.game, this.passengerManager, this.resourceManager, this.barManager, this.travelManager);
	this.eventManager.create();

};

HUD.prototype.update = function update() {
	this.eventManager.update();
};
