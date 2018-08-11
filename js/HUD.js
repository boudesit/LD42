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
	this.isSleeping = null;
};
var style = { font: "bold 16px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
HUD.prototype.create = function create() {

	this.sprite = this.game.add.sprite(this.posX, this.posY, 'progressBar');
	this.sprite.animations.add('idle');
	this.sprite.animations.play('idle', 2, true);

	this.timeDelay = 0;
	this.events = dataEvents;
	//  this.lvlManager = new lvlManager(this.game, 0);
	//  this.lvlManager.create();
	//
	//  this.hero = new HeroManager(this.game,this.lvlManager);
	//  this.hero.create();
	//
	//  this.explosionSound = game.add.audio('explosionSound');
	//  this.explosion  = game.add.sprite(-100,-100, 'explosion');
	//
	//
	// // this.spriteBG.animations.add('backgroundAnime');
	// // this.spriteBG.animations.play('backgroundAnime', 10, true);
	// //  The score
	// this.scoreText = game.add.text(710, 10, this.game.score, { font: '30px Arial', fill: '#000000' });
	// this.scoreText2 = game.add.text(610, 9, 'score :', { font: '30px Arial', fill: '#000000' });
	//
	// this.explosionSound = game.add.audio('explosionSound');
	// this.explosion  = game.add.sprite(-100,-100, 'explosion');
};



HUD.prototype.update = function update() {

	if (this.beginEvent) {
		console.log('test');
		cleanCurrentEvent();
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
	// this.hero.update();
	// this.lvlManager.update();
	// this.scoreText.setText(this.game.score);
	//
	// if (this.shakeWorld > 0)
	// {
	// 	var rand1 = game.rnd.integerInRange(-2,2);
	// 	var rand2 = game.rnd.integerInRange(-2,2);
	// 	game.world.setBounds(rand1, rand2, game.width + rand1, game.height + rand2);
	// 	this.shakeWorld--;
	// }
	//
	// if (this.shakeWorld == 0) {
	// 	game.world.setBounds(0, 0, game.width,game.height);
	// }
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
	if (!this.isSleeping) {
		console.log(button.consequence);
		this.currentEvent.consequenceText = game.add.text(this.currentEvent.posX, this.currentEvent.posY + 200, button.consequence.text, style);
		this.isSleeping = true;
		sleep(3000);
		this.beginEvent = true;
		this.isSleeping = false;
	}
}

function cleanCurrentEvent() {
	if (this.textDescription && this.currentEvent.textDescription) {
		console.log("destroy");
		this.currentEvent.textDescription.destroy();
		for (let button of this.currentEvent.choiceButtons) {
			button.button.destroy();
			button.text.destroy();
		}
		this.currentEvent.consequenceText.destroy();;
	}
}

function sleep( sleepDuration ){
	var now = new Date().getTime();
	while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}