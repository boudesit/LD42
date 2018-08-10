function lvl2(game) {
	this.game = game;

	this.plateform1 = null;
	this.plateform2 = null;
	this.plateform3 = null;
	this.plateform4 = null;
	this.plateform100 = null;
	this.plateform101 = null;
	this.plateform102 = null;
	this.plateform103 = null;


	this.plateform5 = null;
	this.plateform6 = null;
	this.plateform7 = null;
	this.plateform8 = null;
	this.plateform9 = null;
	this.plateform10 = null;

	this.plateform11 = null;
	this.plateform12 = null;
	this.plateform13 = null;
	this.plateform14 = null;

	this.scale1 = null;
	this.scale2 = null;
	this.scale3 = null;
	this.scale4 = null;


	this.burger1 = null;
	this.burger2 = null;
	this.burger3 = null;
	this.burger4 = null;
	this.burger5 = null;
	this.burger6 = null;


	this.vegetable1 = null;
	this.vegetable2 = null;
	this.vegetable3 = null;
	this.vegetable4 = null;

	this.wall1 = null;
	this.wall2 = null;
	this.wall3 = null;

	this.wall11 = null;
	this.wall12 = null;
	this.wall13 = null;

	this.bonusDoor = null;
	this.door = null;


  this.lvlManager = null;
  this.exit = null;

	this.plateforms = this.game.add.group();
	this.scales = this.game.add.group();
	this.doors = this.game.add.group();

	this.burgers = this.game.add.group();
	this.vegetables = this.game.add.group();

	this.walls = this.game.add.group();

};

lvl2.prototype.create = function create() {

		this.createPlateforms();
		this.createScales();
		this.createDoors();
		this.createBurger();
		this.createVegetables();
		this.createWalls();
	};


	lvl2.prototype.createPlateforms = function createPlateforms() {

		this.createFirstLine();
		this.createSecondLine();
		this.createThirdLine();

	};


lvl2.prototype.createFirstLine = function createFirstLine() {

	// First Line of Plateform
	this.plateform1 = new platform(this.game, 0, 100, 100);
	this.plateform1.create();

	this.plateform2 = new platform(this.game, 150, 100, 50);
	this.plateform2.create();

	this.plateform3 = new platform(this.game, 400, 100, 50);
	this.plateform3.create();

	this.plateform100 = new platform(this.game, 600, 100, 100);
	this.plateform100.create();



	this.plateforms.add(this.plateform1.getSprite());
	this.plateforms.add(this.plateform2.getSprite());
	this.plateforms.add(this.plateform3.getSprite());
	this.plateforms.add(this.plateform100.getSprite());
};



lvl2.prototype.createSecondLine = function createSecondLine() {
	// Second Line of Plateform

	this.plateform5 = new platform(this.game, 250, 150, 50);
	this.plateform8 = new platform(this.game, 150, 200, 50);
	this.plateform9 = new platform(this.game, 0, 250, 50);
	this.plateform7 = new platform(this.game, 150, 300, 100);
	this.plateform101 = new platform(this.game, 0, 350, 50);
	this.plateform102 = new platform(this.game, 150, 400, 50);
	this.plateform10 = new platform(this.game, 250, 450, 50);
	this.plateform6 = new platform(this.game, 375, 400, 50);

	// this.plateform11 = new platform(this.game, 0, 100, 400);
	this.plateform12 = new platform(this.game, 500, 450, 100);
	this.plateform13 = new platform(this.game, 600, 400, 150);
	this.plateform15 = new platform(this.game, 0, 500, 150);
	this.plateform103 = new platform(this.game, 500, 180, 150);

  //
  //
	// this.plateform11.create();
	this.plateform12.create();
	this.plateform13.create();
	this.plateform15.create();
  //
  //

	this.plateform5.create();
	this.plateform6.create();
	this.plateform7.create();
	this.plateform8.create();
	this.plateform9.create();
	this.plateform10.create();
	this.plateform101.create();
	this.plateform102.create();
	this.plateform103.create();

	// this.plateforms.add(this.plateform11.getSprite());
	this.plateforms.add(this.plateform12.getSprite());
	this.plateforms.add(this.plateform13.getSprite());
	this.plateforms.add(this.plateform15.getSprite());
  this.plateforms.add(this.plateform5.getSprite());
	this.plateforms.add(this.plateform6.getSprite());
	this.plateforms.add(this.plateform7.getSprite());
	this.plateforms.add(this.plateform8.getSprite());
	this.plateforms.add(this.plateform9.getSprite());
	this.plateforms.add(this.plateform10.getSprite());
	this.plateforms.add(this.plateform101.getSprite());
	this.plateforms.add(this.plateform102.getSprite());
	this.plateforms.add(this.plateform103.getSprite());


};

lvl2.prototype.createThirdLine = function createThirdLine() {
};

lvl2.prototype.createScales = function createScales() {

	this.scale1 = new scale(this.game, 760, 400, 200);
	this.scale1.create();

	this.scale2 = new scale(this.game, 600, 100, 80);
	this.scale2.create();
  // //
	// this.scale3 = new scale(this.game, 0, 0, 200);
	// this.scale3.create();
  // //
	// // this.scale4 = new scale(this.game, 700, 100, 200);
	// // this.scale4.create();
  //
	this.scales.add(this.scale1.getSprite());
	this.scales.add(this.scale2.getSprite());
	// this.scales.add(this.scale3.getSprite());
	// this.scales.add(this.scale4.getSprite());
};

lvl2.prototype.createDoors = function createDoors() {

	this.bonusDoor = new door(this.game, 0, 20, true);
	this.bonusDoor.create();

	this.door = new door(this.game, 650, 20, false);
	this.door.create();

	this.doors.add(this.bonusDoor.getSprite());
	this.doors.add(this.door.getSprite());

};

lvl2.prototype.createBurger = function createBurger() {

	this.burger1 = new burger(this.game, 80, 200);
	this.burger1.create();

	this.burger2 = new burger(this.game, 80, 300);
	this.burger2.create();

	this.burger3 = new burger(this.game, 160, 150);
	this.burger3.create();

	this.burger4 = new burger(this.game, 160, 67);
	this.burger4.create();

	this.burger5 = new burger(this.game, 0, 467);
	this.burger5.create();

	this.burger6 = new burger(this.game, 34, 467);
	this.burger6.create();

	this.burgers.add(this.burger1.getSprite());
	this.burgers.add(this.burger2.getSprite());
	this.burgers.add(this.burger3.getSprite());
	this.burgers.add(this.burger4.getSprite());
	this.burgers.add(this.burger5.getSprite());
	this.burgers.add(this.burger6.getSprite());



};

lvl2.prototype.createVegetables = function createVegetables() {

	this.vegetable1 = new vegetable(this.game, 0, 534);
	this.vegetable1.create();

	this.vegetable2 = new vegetable(this.game, 0, 567);
	this.vegetable2.create();

	this.vegetable3 = new vegetable(this.game, 34, 534);
	this.vegetable3.create();

	this.vegetable4 = new vegetable(this.game, 68, 567);
	this.vegetable4.create();

	this.vegetable5 = new vegetable(this.game, 620, 367);
	this.vegetable5.create();

	this.vegetable6 = new vegetable(this.game, 654, 367);
	this.vegetable6.create();


	this.vegetables.add(this.vegetable1.getSprite());
	this.vegetables.add(this.vegetable2.getSprite());
	this.vegetables.add(this.vegetable3.getSprite());
	this.vegetables.add(this.vegetable4.getSprite());
	this.vegetables.add(this.vegetable5.getSprite());
	this.vegetables.add(this.vegetable6.getSprite());
	// this.vegetables.add(this.vegetable7.getSprite());



};

lvl2.prototype.createWalls = function createWalls() {

	this.wall1 = new wall(this.game, 150, 503);
	this.wall1.create();

	this.walls.add(this.wall1.getSprite());

	// this.wall2 = new wall(this.game, 390, 406);
	// this.wall2.create();
  //
	// this.walls.add(this.wall2.getSprite());
  //
	// this.wall3 = new wall(this.game, 390, 309);
	// this.wall3.create();
  //
	// this.walls.add(this.wall3.getSprite());
  //
	// this.wall11 = new wall(this.game, 390, 153);
	// this.wall11.create();
  //
	// this.walls.add(this.wall11.getSprite());

	// this.wall3 = new wall(this.game, 150, 403);
	// this.wall3.create();
  //
	// this.walls.add(this.wall3.getSprite());
};


lvl2.prototype.update = function update() {

	this.wall1.update();
	// this.wall2.update();
	// this.wall3.update();
	// this.wall11.update();
	// this.wall12.update();
	// this.wall13.update();

};

lvl2.prototype.getDoors = function getDoors() {
	return this.doors;
};

lvl2.prototype.getBurgers = function getBurgers() {
	return this.burgers;
};

lvl2.prototype.getVegetables = function getVegetables() {
	return this.vegetables;
};

lvl2.prototype.getScales = function getScales() {
	return this.scales;
};

lvl2.prototype.getPlateforms = function getPlateforms() {
	return this.plateforms;
};

lvl2.prototype.getWalls = function getWalls() {
	return this.walls;
};

lvl2.prototype.destroyAll = function destroyAll() {

	this.plateforms.destroy();
	this.scales.destroy();;
	this.doors.destroy();

	this.burgers.destroy();
	this.vegetables.destroy();

	this.walls.destroy();
};
