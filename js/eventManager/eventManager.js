function eventManager(game) {
	this.game = game;
  this.beginEvent = true;
	this.events = null;
	this.currentEvent = null;
};
var style = { font: "bold 16px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

eventManager.prototype.create = function create() {

	this.events = dataEvents;
};



eventManager.prototype.update = function update() {

	if (this.beginEvent) {
		console.log('test');
		cleanEvent(this.currentEvent);
		this.currentEvent = {};
		let event = this.events[getRandomInt(0, this.events.length)];

		this.currentEvent.posX = 10;
		this.currentEvent.posY = 40;

		this.currentEvent.textDescription = this.game.add.text(this.currentEvent.posX, this.currentEvent.posY + 17, event.text, style);
		this.currentEvent.choiceButtons = [];

		event.choices.forEach((choice, index) => {
			let button = this.game.add.button(this.currentEvent.posX + 5, this.currentEvent.posY + (35 * (1 + index)), 'button', actionOnClickChoice, this, 2, 1, 0);
			button.width = 500;
			button.height = 30;
			button.consequence = choice.consequence;
			let textButton = this.game.add.text(this.currentEvent.posX + 50, this.currentEvent.posY + (35 * (1 + index) + 7), choice.text, style);
			this.currentEvent.choiceButtons.push({ "button": button, "text": textButton });
		});
		this.beginEvent = false;
	}
};


eventManager.prototype.scoreScreen = function scoreScreen() {
	this.music.pause();
	this.game.state.start("GameScore");
};


function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function actionOnClickChoice(button) {
	console.log(button.consequence);
	this.currentEvent.consequenceText = this.game.add.text(this.currentEvent.posX, this.currentEvent.posY + 200, button.consequence.text, style);
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
