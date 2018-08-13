function HUD(game) {
	this.game = game;
	this.barManager = null;
	this.eventManager = null;
	this.passengerManager = null;
	this.resourceManager = null;
	this.timeDelay = null;

	this.colorTween = null;
	this.tweenStart = true;
	this.tintValue = null;
	this.colorTween = null;

	this.spriteCockpit = null;
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

	this.spriteCockpit = game.add.sprite(0, 0, 'background_cockpit');

	this.spriteCockpit.animations.add('anim');
	this.spriteCockpit.animations.play('anim', 5, true);


	this.tintValue = this.spriteBG.tint;
	this.passengerManager = new passengerManager(this.game);
	this.resourceManager = new resourceManager(this.game);

	this.barManager = new barManager(this.game, this.passengerManager, this.resourceManager);
	this.barManager.create();

this.travelManager = new travelManager(this.game, this.passengerManager, this.resourceManager, this.barManager);
  this.eventManager = new eventManager(this.game, this.passengerManager, this.resourceManager, this.barManager, this.travelManager);

	this.eventManager.create();



	this.startTween();

};

HUD.prototype.update = function update() {
	this.eventManager.update();
	this.barManager.update();



		if(this.resourceManager.getShield() < 10 || this.resourceManager.getEnergy() < 10) {
			this.colorTween.start();
		} else {
			this.spriteBG.tint = 0xfffff9;
			this.colorTween.stop();
			}


};

HUD.prototype.startTween = function startTween() {
	this.tweenTint(this.spriteBG, 0xff0000, 0x770000, 1000, 0);
}

HUD.prototype.tweenTint = function tweenTint(obj, startColor, endColor, time = 250, delay = 0) {
	if (obj) {
		let colorBlend = { step: 0 };

		this.colorTween = this.game.add.tween(colorBlend).to({ step: 100 }, time, Phaser.Easing.Linear.None, delay);
		if (this.tweenStart) {
			this.colorTween.onUpdateCallback(() => {
				obj.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step);
			});
		} else {
			this.colorTween.onUpdateCallback(() => {
				obj.tint = Phaser.Color.interpolateColor(endColor, startColor, 100, colorBlend.step);
			});
		}
		this.tweenStart = !this.tweenStart;
		this.colorTween.onComplete.add(this.startTween, this);

		}
}
