function HUD(game) {
	this.game = game;

	this.events = null;
	this.barManager = null;
	this.currentEvent = null;
	this.eventManager = null;
	this.timeDelay = null;
};
var buttonPlus;
var pourcent = 0;

var style = { font: "bold 16px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
HUD.prototype.create = function create() {
	this.timeDelay = 0;
	this.eventManager = new eventManager(this.game);
	this.eventManager.create();

	this.barManager = new barManager(this.game);
	this.barManager.create();

	button = game.add.button(20, 200, 'test', function() {
		pourcent = pourcent + 10;
		this.barManager.progressEnergy(pourcent);

	}, this, 2, 1, 0);
};

HUD.prototype.update = function update() {

	this.eventManager.update();
};
