function eventManager(game) {
	this.game = game;
	this.beginEvent = true;
	this.events = null;
	this.currentEvent = null;
	this.nextEventId = null;
	this.canClickButton = true;

};
var style = {
	font: "bold 16px Arial",
	fill: "#fff",
	boundsAlignH: "center",
	boundsAlignV: "middle",
	wordWrap: true,
	wordWrapWidth: 450
};

eventManager.prototype.create = function create() {
	this.events = dataEvents;
};



eventManager.prototype.update = function update() {

	if (this.beginEvent) {
		cleanEvent(this.currentEvent);
		this.currentEvent = {};
		if (this.nextEventId) {
			var event = this.events[this.nextEventId];
		} else {
			var event = this.events[getRandomInt(0, this.events.length)];
			while (event.canBeRandomEvent === 'false') {
				event = this.events[getRandomInt(0, this.events.length)];
			}
		}

		this.currentEvent.posX = 10;
		this.currentEvent.posY = 40;
		this.currentEvent.nexElementPosY = this.currentEvent.posY;

		this.currentEvent.textDescription = this.game.add.text(this.currentEvent.posX, this.currentEvent.nexElementPosY, event.text, style);
		this.currentEvent.nexElementPosY = this.currentEvent.nexElementPosY + this.currentEvent.textDescription.height + 5;
		this.currentEvent.choiceButtons = [];

		event.choices.forEach((choice, index) => {
			let button = this.game.add.button(this.currentEvent.posX + 5, this.currentEvent.nexElementPosY, 'button', actionOnClickChoice, this, 2, 1, 0);
			button.width = 500;
			button.height = 30;
			button.consequence = choice.consequence;
			let textButton = this.game.add.text(this.currentEvent.posX + 50, this.currentEvent.nexElementPosY + 7, choice.text, style);
			this.currentEvent.nexElementPosY = this.currentEvent.nexElementPosY + button.height + 5;
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

async function actionOnClickChoice(button) {
	if (this.canClickButton) {
		console.log(button.consequence);
		this.currentEvent.consequenceText = this.game.add.text(this.currentEvent.posX, this.currentEvent.nexElementPosY, button.consequence.text, style);
		this.nextEventId = button.consequence.nextEvent;
		this.canClickButton = false;
		await sleep(3000);
		this.beginEvent = true;
		this.canClickButton = true;
	}
}

function cleanEvent(event) {
	if (event && event.textDescription) {
		event.textDescription.destroy();
		for (let button of event.choiceButtons) {
			button.button.destroy();
			button.text.destroy();
		}
		event.consequenceText.destroy();
	}
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
