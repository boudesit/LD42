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
	this.barManager = null;
};
var buttonPlus;
var pourcent = 0;

HUD.prototype.create = function create() {

	this.timeDelay = 0;
	this.events = dataEvents;

	this.barManager = new barManager(this.game);
	this.barManager.create();

	button = game.add.button(20, 200, 'button', actionOnClick, this, 2, 1, 0);
};

HUD.prototype.update = function update() {
if(this.beginEvent) {
		let eventId = getRandomInt(0, this.events.length) ;

		var style = { font: "bold 16px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
		game.add.text(0, 0, this.events[eventId].id, style);
		game.add.text(0, 17, this.events[eventId].text, style);

		this.events[eventId].choices.forEach((element, index) => {
			game.add.text(0, 17 * (2 + index), element.text, style);
		});
		this.beginEvent = false;
	}

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

function actionOnClick () {
	pourcent = pourcent + 10;
	this.barManager.progressEnergy(pourcent);
}
