function resourceManager(game) {
    this.game = game;

    this.maxEnergy = 100;
    this.game.totalEnergy = 100;

    this.maxSearch = 100;
    this.game.totalSearch = 0;

    this.maxShield = 100;
    this.game.totalShield = 100;
}

resourceManager.prototype.create = function create() { };


resourceManager.prototype.update = function update() { };

resourceManager.prototype.addEnergy = function addEnergy(number) {
    this.game.totalEnergy += number;
    if (this.game.totalEnergy > this.maxEnergy) {
        this.game.totalEnergy = this.maxEnergy;
    } else if (this.game.totalEnergy < 0) {
        this.game.totalEnergy = 0;
    }
};

resourceManager.prototype.addSearch = function addSearch(number) {
    this.game.totalSearch += number;
    if (this.game.totalSearch > this.maxSearch) {
        this.game.totalSearch = this.maxSearch;
    } else if (this.game.totalSearch < 0) {
        this.game.totalSearch = 0;
    }
};

resourceManager.prototype.addShield = function addShield(number) {
    this.game.totalShield += number;
    if (this.game.totalShield > this.maxShield) {
        this.game.totalShield = this.maxShield;
    } else if (this.game.totalShield < 0) {
        this.game.totalShield = 0;
    }
};

resourceManager.prototype.getEnergy = function getEnergy() {
    return this.game.totalEnergy;
};

resourceManager.prototype.getSearch = function getSearch() {
    return this.game.totalSearch;
};

resourceManager.prototype.getShield = function getShield() {
    return this.game.totalShield;
};

resourceManager.prototype.toString = function toString() {
    return "Energy : " + this.game.totalEnergy + "/" + this.maxEnergy + "\n"
        + "Shield : " + this.game.totalShield + "/" + this.maxShield + "\n"
        + "Search : " + this.game.totalSearch + "/" + this.maxSearch + "\n";
};
