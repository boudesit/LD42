function resourceManager(game) {
    this.game = game;

    this.maxEnergy = 100;
    this.totalEnergy = 100;

    this.maxSearch = 100;
    this.totalSearch = 0;

    this.maxShield = 100;
    this.totalShield = 100;
}

resourceManager.prototype.create = function create() { };


resourceManager.prototype.update = function update() { };

resourceManager.prototype.addEnergy = function addEnergy(number) {
    this.totalEnergy += number;
    if (this.totalEnergy > this.maxEnergy) {
        this.totalEnergy = this.maxEnergy;
    } else if (this.totalEnergy < 0) {
        this.totalEnergy = 0;
    }
};

resourceManager.prototype.addSearch = function addSearch(number) {
    this.totalSearch += number;
    if (this.totalSearch > this.maxSearch) {
        this.totalSearch = this.maxSearch;
    } else if (this.totalSearch < 0) {
        this.totalSearch = 0;
    }
};

resourceManager.prototype.addShield = function addShield(number) {
    this.totalShield += number;
    if (this.totalShield > this.maxShield) {
        this.totalShield = this.maxShield;
    } else if (this.totalShield < 0) {
        this.totalShield = 0;
    }
};

resourceManager.prototype.getEnergy = function getEnergy() {
    return this.totalEnergy;
};

resourceManager.prototype.getSearch = function getSearch() {
    return this.totalSearch;
};

resourceManager.prototype.getShield = function getShield() {
    return this.totalShield;
};

resourceManager.prototype.toString = function toString() {
    return "Energy : " + this.totalEnergy + "/" + this.maxEnergy + "\n"
        + "Shield : " + this.totalShield + "/" + this.maxShield + "\n"
        + "Search : " + this.totalSearch + "/" + this.maxSearch + "\n";
};
