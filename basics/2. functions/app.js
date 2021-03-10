"use strict";
/* !!!READ TS FILE FOR READABILITY!!! */
/* === TYPESCRIPT AND FUNCTIONS === */
// Typescript can clarify what will be returned to functions and passed into functions inside parameters
/* === EXAMPLE === */
function sum(x, y) {
    return x + y;
}
sum(5, 5);
/* === EXPLAINED === */
// x:number, y:number
// defines the parameter's variable types to be number.
// (x, y): number
// defines the return type to be number
/* === EXAMPLE === */
function log(word) {
    console.log(word);
}
/* === EXAMPLE === */
var newLogger = function (word) {
    console.log(word);
};
/* === EXPLAINED === */
// Typescript can also take arror functions
