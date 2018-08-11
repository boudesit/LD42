function HUD(game) {
	this.game = game;

	this.events = null;
	this.currentEvent = null;
	this.eventManager = null;
};
var style = { font: "bold 16px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
HUD.prototype.create = function create() {
	this.eventManager = new eventManager(this.game);
	this.eventManager.create();
};



HUD.prototype.update = function update() {

	this.eventManager.update();
};
