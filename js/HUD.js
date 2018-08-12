function HUD(game) {
	this.game = game;
	this.barManager = null;
	this.eventManager = null;
	this.passengerManager = null;
	this.resourceManager = null;
	this.timeDelay = null;

	this.colorTween = null;
};
var buttonPlus;

var style = {
	font: "bold 16px Arial",
	fill: "#fff",
	boundsAlignH: "center",
	boundsAlignV: "middle",
	wordWrap: true,
	wordWrapWidth: 450
};

HUD.prototype.create = function create() {

	this.spriteBG = this.game.add.tileSprite(0, 0, 525, 900, 'background');
	this.spriteBG.animations.add('background');
	this.spriteBG.animations.play('background', 3, true);
	this.timeDelay = 0;

	this.tweenTint(this.spriteBG, 0xff0000,0xfffff0,1);

	this.passengerManager = new passengerManager();
	this.resourceManager = new resourceManager();

	this.barManager = new barManager(this.game, this.passengerManager, this.resourceManager);
	this.barManager.create();

	this.travelManager = new travelManager(this.game, this.passengerManager, this.resourceManager, this.barManager);

	this.eventManager = new eventManager(this.game, this.passengerManager, this.resourceManager, this.barManager, this.travelManager);
	this.eventManager.create();

};

HUD.prototype.update = function update() {
	this.eventManager.update();


	this.colorTween.start();

};


HUD.prototype.tweenTint = function tweenTint(obj, startColor, endColor, time) {
	// create an object to tween with our step value at 0
	let colorBlend = {step: 0};
	 // create the tween on this object and tween its step property to 100
	 this.colorTween = this.game.add.tween(colorBlend).to({step: 100}, time).loop(true);
	 // run the interpolateColor function every time the tween updates, feeding it the
	 // updated value of our tween each time, and set the result as our tint
	 this.colorTween.onUpdateCallback(function() {
		 obj.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step);
	 });
	 // set the object to the start color straight away
	 obj.tint = startColor;
	 // start the tween


 };
