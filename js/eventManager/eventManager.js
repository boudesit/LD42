function eventManager(game, passengerManager, resourceManager, barManager, travelManager) {
	this.game = game;
	this.beginEvent = false;
	this.events = null;
	this.currentEvent = null;
	this.nextEventId = null;
	this.canClickButton = true;
	this.goToNextEvent = false;
	this.passengerManager = passengerManager;
	this.resourceManager = resourceManager;
	this.barManager = barManager;
	this.travelManager = travelManager;
	this.continue = null;
	this.openWindowsSprite = null;
	this.alreadyLaunch = false;
	this.animDial = null;
	this.animDialFix = null;
	this.oneTimeEventIds = [];
};

eventManager.prototype.create = function create() {
	this.events = dataEvents;

	this.openWindowsSprite = this.game.add.sprite(12, 110, 'animDialogueOpen');

	this.animDial = this.openWindowsSprite.animations.add('OpenDialog');
	this.animDialFix = this.openWindowsSprite.animations.add('OpenDialogFix', [47], 10, true);


	this.animDial.onComplete.add(function(){

			this.openWindowsSprite.animations.stop([48], true);

			this.openWindowsSprite.animations.play('OpenDialogFix',15, false);
			this.beginEvent = true;
	}, this);
};



eventManager.prototype.update = function update() {
	if(!this.beginEvent && !this.alreadyLaunch) {
		this.openWindowsSprite.animations.play('OpenDialog',15, false);
		this.alreadyLaunch = true;
	} else if (this.beginEvent) {
		this.cleanEvent(this.currentEvent);
		this.currentEvent = {};
		if (this.nextEventId) {
			var event = this.events[this.nextEventId];
		} else {
			var event = this.events[this.getRandomInt(0, this.events.length)];
			while (event.canBeRandomEvent === 'false' || this.oneTimeEventIds.indexOf(event.id) !== -1) {
				event = this.events[this.getRandomInt(0, this.events.length)];
			}
		}

		if(event.oneTime === 'true') {
			this.oneTimeEventIds.push(event.id);
		}
		this.currentEvent.posX = 50;
		this.currentEvent.posY = 175;
		this.currentEvent.nexElementPosY = this.currentEvent.posY;

		this.currentEvent.textDescription = this.game.add.text(this.currentEvent.posX, this.currentEvent.nexElementPosY, '', style);

		writeTextCharByChar(this.currentEvent.textDescription, event.text, 5);

		this.currentEvent.nexElementPosY = 800 - 5;
		this.currentEvent.choiceButtons = [];

		event.choices.forEach((choice, index) => {
			if (this.canChoose(choice)) {
				let button = this.game.add.button(this.currentEvent.posX - 45, this.currentEvent.nexElementPosY - 50, 'button', actionOnClickChoice, this, 2, 1, 0);
				let textButton = this.game.add.text(this.currentEvent.posX , this.currentEvent.nexElementPosY - 40, choice.text, style);
				button.width = 500;
				button.height = textButton.height + 10;
				button.consequence = choice.consequence;
				this.currentEvent.nexElementPosY = this.currentEvent.nexElementPosY - button.height - 5;
				this.currentEvent.choiceButtons.push({ "button": button, "text": textButton });
			}
		});
		this.beginEvent = false;
		this.goToNextEvent = false;
		this.canClickNextEvent = false;
	}
	if (this.goToNextEvent) {
		this.travelManager.travel();
		this.stopContinue();

		console.log(this.passengerManager.toString());
		console.log(this.resourceManager.toString());
		console.log(this.game.gameState);

		if (this.game.gameState === 'continue') {
			this.beginEvent = false;
			this.canClickButton = true;
		} else {
			this.cleanConsequence(this.currentEvent);
		}
	}
};

eventManager.prototype.scoreScreen = function scoreScreen() {
	this.music.pause();
	this.game.state.start("GameScore");
};

async function actionOnClickChoice(button) {
	if (this.canClickButton) {
		this.cleanEvent(this.currentEvent);

		let consequenceButton = this.game.add.button(this.currentEvent.posX + 5, this.currentEvent.nexElementPosY - 50, 'button', actionOnClickNextEvent, this, 2, 1, 0);
		let consequenceText = this.game.add.text(this.currentEvent.posX + 50, this.currentEvent.nexElementPosY - 40, button.consequence.text, style);
		consequenceButton.width = 500;
		consequenceButton.height = consequenceText.height + 10;
		this.currentEvent.consequenceButton = { "button": consequenceButton, "text": consequenceText };

		this.nextEventId = button.consequence.nextEvent;
		this.canClickButton = false;
		/////////////////////////////////////////////////////////////////////////
		/////////////////////////CLICK TO CONTINUE//////////////////////////////
		///////////////////////////////////////////////////////////////////////
		this.continue = game.add.sprite(160, 873, 'continue');
		var animContinue = this.continue.animations.add('animContinue');
		this.continue.animations.play('animContinue', 0.5, true);

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
		if (button.consequence.maxPassenger) {
			this.passengerManager.addMaxPassenger(this.getConsequenceValue(button.consequence.maxPassenger));
		}

		this.barManager.updateProgressBars();
		this.canClickNextEvent = true;
	}
}

function actionOnClickNextEvent(button) {
	if (this.canClickNextEvent) {
		this.goToNextEvent = true;
		this.alreadyLaunch = false;
		this.cleanConsequence(this.currentEvent);
	}
}

eventManager.prototype.cleanEvent = function cleanEvent(event) {
	if (event && event.textDescription) {
		event.textDescription.destroy();
		for (let button of event.choiceButtons) {
			button.button.destroy();
			button.text.destroy();
		}
	}
}

eventManager.prototype.cleanConsequence = function cleanConsequence(event) {
	if (event && event.consequenceButton) {
		event.consequenceButton.button.destroy();
		event.consequenceButton.text.destroy();
	}
}

function sleep(ms) {
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
};

eventManager.prototype.stopContinue = function stopContinue() {
	this.continue.destroy();
};

async function writeTextCharByChar(textZone, text, delay) {
	for (let c of text) {
		textZone.text = textZone.text.concat(c);
		await sleep(delay);
	}
};
