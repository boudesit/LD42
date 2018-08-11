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
	this.currentEvent = null;

};
var buttonPlus;
var pourcent = 0;

var style = { font: "bold 16px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
HUD.prototype.create = function create() {

	this.timeDelay = 0;
	this.events = dataEvents;

	this.barManager = new barManager(this.game);
	this.barManager.create();

	button = game.add.button(20, 200, 'test', actionOnClick, this, 2, 1, 0);
};

HUD.prototype.update = function update() {

	if (this.beginEvent) {
		console.log('test');
		cleanEvent(this.currentEvent);
		this.currentEvent = {};
		let event = this.events[getRandomInt(0, this.events.length)];

		this.currentEvent.posX = 10;
		this.currentEvent.posY = 40;

		this.currentEvent.textDescription = game.add.text(this.currentEvent.posX, this.currentEvent.posY + 17, event.text, style);
		this.currentEvent.choiceButtons = [];

		event.choices.forEach((choice, index) => {
			let button = game.add.button(this.currentEvent.posX + 5, this.currentEvent.posY + (35 * (1 + index)), 'button', actionOnClick, this, 2, 1, 0);
			button.width = 500;
			button.height = 30;
			button.consequence = choice.consequence;
			let textButton = game.add.text(this.currentEvent.posX + 50, this.currentEvent.posY + (35 * (1 + index) + 7), choice.text, style);
			this.currentEvent.choiceButtons.push({ "button": button, "text": textButton });
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

function actionOnClick(button) {
	console.log(button.consequence);
	this.currentEvent.consequenceText = game.add.text(this.currentEvent.posX, this.currentEvent.posY + 200, button.consequence.text, style);
	this.beginEvent = true;
}

function cleanEvent(event) {
	if (event) {
		console.log("destroy");
		event.textDescription.destroy();
		for (let button of event.choiceButtons) {
			button.button.destroy();
			button.text.destroy();
		}
		event.consequenceText.destroy();
	} else {
		console.log("not");
	}
}

function actionOnClick () {
	pourcent = pourcent + 10;
	this.barManager.progressEnergy(pourcent);
}
