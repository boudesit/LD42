function HUD(game) {
	this.game = game;
	this.ressourcesManager = null;
	this.player = null;
	this.computer = null;
	this.lvlManager = null;
	this.beginEvent = true;
	this.spriteBG = null;
	this.fight = null;
	this.fightCastle = null;
	this.computeRessourcesTkt = null;
	this.hero = null;
	this.timeDelay = 0;
	this.game.score = 0;
	this.scoreText = '';
	this.events = null;
	this.currentEvent = null;
};
var style = { font: "bold 16px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
HUD.prototype.create = function create() {

	this.timeDelay = 0;
	this.events = dataEvents;

	
*};



HUD.prototype.update = function update() {


};


HUD.prototype.scoreScreen = function scoreScreen() {
	this.music.pause();
	this.game.state.start("GameScore");
};


function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
