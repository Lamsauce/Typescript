"use strict";
/* !!! FOR READABILITY READ TS FILE !!! */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* === CLASSES === */
// very similar to regular JavaScript but slightly different.
var Car = /** @class */ (function () {
    // constructor
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    return Car;
}());
var personCar = new Car("Honda", "CRV", 2018);
// extending
var RaceCar = /** @class */ (function (_super) {
    __extends(RaceCar, _super);
    function RaceCar(make, model, year, number, sponsor) {
        var _this = _super.call(this, make, model, year) || this;
        _this.number = number;
        _this.sponsor = sponsor;
        return _this;
    }
    return RaceCar;
}(Car));
var businessCar = new RaceCar("Chevy", "Custom", 2021, 4, "Target");
