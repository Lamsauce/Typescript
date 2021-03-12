"use strict";
/* !!! FOR READABILITY READ TS FILE !!! */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* === DECORATORS === */
// Javascript doesn't have decorators until typescript is installed, allows decorators to be BUILT.
// Example of a decorator, from Python is @loginrequired
function Logger(logName) {
    return function (Constructor) {
        var testInput = new Constructor("password");
        console.log(logName, testInput);
    };
}
var Input = /** @class */ (function () {
    //constructor
    function Input(type) {
        this.type = type;
    }
    Input = __decorate([
        Logger("Input")
    ], Input);
    return Input;
}());
var DomElement = /** @class */ (function () {
    function DomElement(type) {
        this.type = type;
    }
    DomElement = __decorate([
        Logger("DomElement")
    ], DomElement);
    return DomElement;
}());
// creates a decorator
// then looks at input
// then prints out entire class to view when decoration is ran.
//Typescript still considers decorations as experimental
//MUST BE TURNED ON through config
// Experimental Decorators in .json file should be uncommented.
