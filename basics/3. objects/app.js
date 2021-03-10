"use strict";
/* !!!READ TS FILE FOR READABILITY!!! */
// === EXAMPLE
//let person: object = {
//    name: "Lily",
//    age: 22,
//}
//person = {
//    name: "Lamsauce",
//};
// ===== EXPLAINED
// the only type defined in this example is 'person' as an object
// this allows the next person object to only add a name without the age
// === EXAMPLE
var person = {
    name: "Lily",
    age: 22,
};
//person = {
//    name: "Lamsauce"
//}
// ===== EXPLAINED
// the object is defined with the variables defined within, and can be assigned afterwards
// the latter code won't work because it now requires an age.
// === HOW TO DEFINE AN OPTIONAL PROPERTY IN AN OBJECT
// You can insert a '?' after variable name and before the colon.
// age ?: number;
