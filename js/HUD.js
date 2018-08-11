function HUD(game) {
	this.game = game;
	this.barManager = null;
	this.eventManager = null;
	this.passengerManager = null;
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

	this.barManager = new barManager(this.game, this.passengerManager);
	this.barManager.create();

	this.eventManager = new eventManager(this.game, this.passengerManager, this.barManager);
	this.eventManager.create();

};

HUD.prototype.update = function update() {

	this.eventManager.update();
};
