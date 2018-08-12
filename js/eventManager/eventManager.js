function eventManager(game, passengerManager, resourceManager, barManager, travelManager) {
	this.game = game;
	this.beginEvent = true;
	this.events = null;
	this.currentEvent = null;
	this.nextEventId = null;
	this.canClickButton = true;
	this.goToNextEvent = false;
	this.passengerManager = passengerManager;
	this.resourceManager = resourceManager;
	this.barManager = barManager;
	this.travelManager = travelManager;
};

eventManager.prototype.create = function create() {
	this.events = dataEvents;
	this.game.input.onDown.add(actionOnClickNextEvent, this);
};



eventManager.prototype.update = function update() {
	if (this.beginEvent) {

		this.cleanEvent(this.currentEvent);
		this.currentEvent = {};
		if (this.nextEventId) {
			var event = this.events[this.nextEventId];
		} else {
			var event = this.events[this.getRandomInt(0, this.events.length)];
			while (event.canBeRandomEvent === 'false') {
				event = this.events[this.getRandomInt(0, this.events.length)];
			}
		}

		this.currentEvent.posX = 10;
		this.currentEvent.posY = 40;
		this.currentEvent.nexElementPosY = this.currentEvent.posY;

		this.currentEvent.textDescription = this.game.add.text(this.currentEvent.posX, this.currentEvent.nexElementPosY, event.text, style);
		this.currentEvent.nexElementPosY = this.currentEvent.nexElementPosY + this.currentEvent.textDescription.height + 5;
		this.currentEvent.choiceButtons = [];

		event.choices.forEach((choice, index) => {
			if (this.canChoose(choice)) {
				let button = this.game.add.button(this.currentEvent.posX + 5, this.currentEvent.nexElementPosY, 'button', actionOnClickChoice, this, 2, 1, 0);
				let textButton = this.game.add.text(this.currentEvent.posX + 50, this.currentEvent.nexElementPosY + 10, choice.text, style);
				button.width = 500;
				button.height = textButton.height + 10;
				button.consequence = choice.consequence;
				this.currentEvent.nexElementPosY = this.currentEvent.nexElementPosY + button.height + 5;
				this.currentEvent.choiceButtons.push({ "button": button, "text": textButton });
			}
		});
		this.beginEvent = false;
		this.goToNextEvent = false;
		this.canClickNextEvent = false;
	}
	if(this.goToNextEvent) {
		this.travelManager.travel();

		console.log(this.passengerManager.toString());
		console.log(this.resourceManager.toString());
		console.log(this.game.gameState);

		if (this.game.gameState === 'continue') {
			this.beginEvent = true;
			this.canClickButton = true;
		} else {
			this.cleanEvent(this.currentEvent);
		}
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
			this.resourceManager.addEnergy(this.getConsequenceValue(button.consequence.energy));
		}
		if (button.consequence.search) {
			this.resourceManager.addSearch(this.getConsequenceValue(button.consequence.search));
		}
		if (button.consequence.shield) {
			this.resourceManager.addShield(this.getConsequenceValue(button.consequence.shield));
		}
		if (button.consequence.engineer) {
			this.passengerManager.addEngineer(this.getConsequenceValue(button.consequence.engineer));
		}
		if (button.consequence.soldier) {
			this.passengerManager.addSoldier(this.getConsequenceValue(button.consequence.soldier));
		}
		if (button.consequence.civilian) {
			this.passengerManager.addCivilian(this.getConsequenceValue(button.consequence.civilian));
		}

		this.barManager.updateProgressBars();
		this.canClickNextEvent = true;
	}
}

function actionOnClickNextEvent(button) {
	if(this.canClickNextEvent) {
		this.goToNextEvent = true;
	}
}

eventManager.prototype.cleanEvent = function cleanEvent(event) {
	if (event && event.textDescription) {
		event.textDescription.destroy();
		for (let button of event.choiceButtons) {
			button.button.destroy();
			button.text.destroy();
		}
		event.consequenceText.destroy();
	}
}

eventManager.prototype.sleep = function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

eventManager.prototype.getRandomInt = function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

eventManager.prototype.getConsequenceValue = function getConsequenceValue(value) {
	if (typeof value === 'string') {
		return Number(value);
	} else if (typeof value == 'undefined') {
		return 0;
	} else {
		return this.getRandomInt(value.min, value.max);
	}
}

eventManager.prototype.canChoose = function canChoose(choice) {
	let canChoose = true;
	if (choice.condition) {
		if (choice.condition.energy) {
			if (typeof choice.condition.energy === 'number') {
				canChoose = canChoose && (Number(choice.condition.energy) === this.resourceManager.getEnergy());
			} else {
				if (choice.condition.energy.min) {
					canChoose = canChoose && (Number(choice.condition.energy.min) <= this.resourceManager.getEnergy());
				}
				if (choice.condition.energy.max) {
					canChoose = canChoose && (Number(choice.condition.energy.max) >= this.resourceManager.getEnergy());
				}
			}
		}
		if (choice.condition.shield) {
			if (typeof choice.condition.shield === 'number') {
				canChoose = canChoose && (Number(choice.condition.shield) === this.resourceManager.getShield());
			} else {
				if (choice.condition.shield.min) {
					canChoose = canChoose && (Number(choice.condition.shield.min) <= this.resourceManager.getShield());
				}
				if (choice.condition.shield.max) {
					canChoose = canChoose && (Number(choice.condition.shield.max) >= this.resourceManager.getShield());
				}
			}
		}
		if (choice.condition.search) {
			if (typeof choice.condition.search === 'number') {
				canChoose = canChoose && (Number(choice.condition.search) === this.resourceManager.getSearch());
			} else {
				if (choice.condition.search.min) {
					canChoose = canChoose && (Number(choice.condition.search.min) <= this.resourceManager.getSearch());
				}
				if (choice.condition.search.max) {
					canChoose = canChoose && (Number(choice.condition.shiesearchld.max) >= this.resourceManager.getSearch());
				}
			}
		}
		if (choice.condition.passenger) {
			if (typeof choice.condition.passenger === 'number') {
				canChoose = canChoose && (Number(choice.condition.passenger) === this.passengerManager.getTotalPassenger());
			} else {
				if (choice.condition.passenger.min) {
					canChoose = canChoose && (Number(choice.condition.passenger.min) <= this.passengerManager.getTotalPassenger());
				}
				if (choice.condition.passenger.max) {
					canChoose = canChoose && (Number(choice.condition.passenger.max) >= this.passengerManager.getTotalPassenger());
				}
			}
		}
		if (choice.condition.civilian) {
			if (typeof choice.condition.civilian === 'number') {
				canChoose = canChoose && (Number(choice.condition.civilian) === this.passengerManager.getCivilian());
			} else {
				if (choice.condition.civilian.min) {
					canChoose = canChoose && (Number(choice.condition.civilian.min) <= this.passengerManager.getCivilian());
				}
				if (choice.condition.civilian.max) {
					canChoose = canChoose && (Number(choice.condition.civilian.max) >= this.passengerManager.getCivilian());
				}
			}
		}
		if (choice.condition.engineer) {
			if (typeof choice.condition.engineer === 'number') {
				canChoose = canChoose && (Number(choice.condition.engineer) === this.passengerManager.getEngineer());
			} else {
				if (choice.condition.engineer.min) {
					canChoose = canChoose && (Number(choice.condition.engineer.min) <= this.passengerManager.getEngineer());
				}
				if (choice.condition.engineer.max) {
					canChoose = canChoose && (Number(choice.condition.engineer.max) >= this.passengerManager.getEngineer());
				}
			}
		}
		if (choice.condition.soldier) {
			if (typeof choice.condition.soldier === 'number') {
				canChoose = canChoose && (Number(choice.condition.soldier) === this.passengerManager.getSoldier());
			} else {
				if (choice.condition.soldier.min) {
					canChoose = canChoose && (Number(choice.condition.soldier.min) <= this.passengerManager.getSoldier());
				}
				if (choice.condition.soldier.max) {
					canChoose = canChoose && (Number(choice.condition.soldier.max) >= this.passengerManager.getSoldier());
				}
			}
		}
	}
	return canChoose;
}