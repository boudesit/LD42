var eventManager = function(game) {

	this.game = game;
}

eventManager.prototype = {
    create: function() {

    },

    update: function() {

      if (this.beginEvent) {
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
    			let textButton = game.add.text(this.currentEvent.posX + 50,this.currentEvent.posY + (35 * (1 + index) + 7), choice.text, style);
    			this.currentEvent.choiceButtons.push({ "button": button, "text": textButton });
    		});
    		this.beginEvent = false;
    	}
    },
}

function actionOnClick(button) {
	console.log(button.consequence);
	this.currentEvent.consequenceText = game.add.text(50, 400, button.consequence.text, style);
	this.beginEvent = true;
}
