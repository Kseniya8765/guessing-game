class GuessingGame {
    constructor() {
        this.max = 0;
        this.min = 0;
        this.game = 0;
    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
    this.game = Math.round((this.max + this.min)/ 2);
    return this.game;
    }

    lower() {
this.max = this.game;
    }

    greater() {
this.min = this.game;
    }
}

module.exports = GuessingGame;
