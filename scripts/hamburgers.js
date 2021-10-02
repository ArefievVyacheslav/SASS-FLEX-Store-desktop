'use strict';

class MiniHamburger {
    constructor(price = 50, call = 20) {
        this.price = price;
        this.call = call;
    }
    cheese() {
        this.price += 10;
        this.call += 20;
    }
    salad() {
        this.price += 20;
        this.call += 5;
    }
    potatoes() {
        this.price += 15;
        this.call += 10;
    }
    seasoning() {
        this.price += 15;
    }
    mayonnaise() {
        this.price += 20;
        this.call += 5;
    }
}

class BigHamburger extends MiniHamburger{
    constructor(price, call) {
        super(price, call);
        this.price += 50;
        this.call += 20;
    }
}

const mini = new MiniHamburger;
const big = new BigHamburger;

//работайте через консоль