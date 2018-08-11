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
		let eventId = getRandomInt(0, this.events.length);


		game.add.text(0, 0, this.events[eventId].id, style);
		game.add.text(0, 17, this.events[eventId].text, style);

		this.events[eventId].choices.forEach((choice, index) => {
			let button = game.add.button(5, 35 * (1 + index), 'button', actionOnClick, this, 2, 1, 0);
			button.width = 500;
			button.height = 30;
			button.consequence = choice.consequence;
			game.add.text(50, 35 * (1 + index) + 7, choice.text, style);
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
	console.log(button.consequence);
	game.add.text(50, 400, button.consequence.text, style);
}
