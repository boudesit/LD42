function eventManager(game, passengerManager, resourceManager, barManager, travelManager) {
	this.game = game;
	this.beginEvent = true;
	this.events = null;
	this.currentEvent = null;
	this.nextEventId = null;
	this.canClickButton = true;
	this.passengerManager = passengerManager;
	this.resourceManager = resourceManager;
	this.barManager = barManager;
	this.travelManager = travelManager;
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

async function actionOnClickChoice(button) {
	if (this.canClickButton) {
		this.currentEvent.consequenceText = this.game.add.text(this.currentEvent.posX, this.currentEvent.nexElementPosY, button.consequence.text, style);
		this.nextEventId = button.consequence.nextEvent;
		this.canClickButton = false;

		if (button.consequence.energy) {
			this.resourceManager.addEnergy(getConsequenceValue(button.consequence.energy));
		}
		if (button.consequence.search) {
			this.resourceManager.addSearch(getConsequenceValue(button.consequence.search));
		}
		if (button.consequence.shield) {
			this.resourceManager.addShield(getConsequenceValue(button.consequence.shield));
		}
		if (button.consequence.engineer) {
			this.passengerManager.addEngineer(getConsequenceValue(button.consequence.engineer));
		}
		if (button.consequence.soldier) {
			this.passengerManager.addSoldier(getConsequenceValue(button.consequence.soldier));
		}
		if (button.consequence.civilian) {
			this.passengerManager.addCivilian(getConsequenceValue(button.consequence.civilian));
		}

		this.barManager.updateProgressBars();

		await sleep(2000);

		this.travelManager.travel();

		console.log(this.passengerManager.toString());
		console.log(this.resourceManager.toString());
		console.log(this.game.gameState);

		if (this.game.gameState === 'continue') {
			this.beginEvent = true;
			this.canClickButton = true;
		} else {
			cleanEvent(this.currentEvent);
		}
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

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function getConsequenceValue(value) {
	if (typeof value === 'string') {
		return Number(value);
	} else if (typeof value == 'undefined') {
		return 0;
	} else {
		return getRandomInt(value.min, value.max);
	}
}