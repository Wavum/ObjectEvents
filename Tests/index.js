"use strict";
var Car = (function () {
    function Car() {
        this.onStart = new QuickEvent();
    }
    Car.prototype.start = function () {
        this.onStart.fire(this);
    };
    return Car;
}());
var car = new Car();
car.onStart.listen(carStarted);
car.start();
function carStarted(args) {
    args.onStart.unlisten(carStarted);
    console.log("args: " + args.constructor); //Car
}
