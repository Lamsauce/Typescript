/* !!! FOR READABILITY READ TS FILE !!! */

/* === DECORATORS === */
// Javascript doesn't have decorators until typescript is installed, allows decorators to be BUILT.
// Example of a decorator, from Python is @loginrequired

function Logger(logName: string) {
    return function(Constructor: Function){
        const testInput = new Constructor("password");
    console.log(logName, testInput);
    };
}

@Logger("Input")
class Input {
    //field(s)
    type: string;

    //constructor
    constructor(type: string) {
        this.type = type;
    }
}

@Logger("DomElement")
class DomElement {
    type: string;

    constructor(type: string) {
        this.type = type;
    }
}

// creates a decorator
    // then looks at input
        // then prints out entire class to view when decoration is ran.

//Typescript still considers decorations as experimental
//MUST BE TURNED ON through config
    // Experimental Decorators in .json file should be uncommented.
