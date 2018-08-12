function HUD(game) {
	this.game = game;
	this.barManager = null;
	this.eventManager = null;
	this.passengerManager = null;
	this.resourceManager = null;
	this.timeDelay = null;

	this.colorTween = null;
	this.tweenStart = true;
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

	this.startTween();

	this.passengerManager = new passengerManager(this.game);
	this.resourceManager = new resourceManager(this.game);

	this.barManager = new barManager(this.game, this.passengerManager, this.resourceManager);
	this.barManager.create();

	this.travelManager = new travelManager(this.game, this.passengerManager, this.resourceManager, this.barManager);

	this.eventManager = new eventManager(this.game, this.passengerManager, this.resourceManager, this.barManager, this.travelManager);
	this.eventManager.create();

};

HUD.prototype.update = function update() {
	this.eventManager.update();

};

HUD.prototype.startTween = function startTween() {
	this.tweenTint(this.spriteBG, 0xff0000, 0x000000, 1000, 0);
}

HUD.prototype.tweenTint = function tweenTint(obj, startColor, endColor, time = 250, delay = 0) {
	if (obj) {
		let colorBlend = { step: 0 };

		let colorTween = this.game.add.tween(colorBlend).to({ step: 100 }, time, Phaser.Easing.Linear.None, delay);
		if (this.tweenStart) {
			colorTween.onUpdateCallback(() => {
				obj.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step);
			});
		} else {
			colorTween.onUpdateCallback(() => {
				obj.tint = Phaser.Color.interpolateColor(endColor, startColor, 100, colorBlend.step);
			});
		}
		this.tweenStart = !this.tweenStart;
		colorTween.onComplete.add(this.startTween, this);
		colorTween.start();
	}
}
