/* !!! FOR READABILITY READ TS FILE !!! */

/* === INTERFACES === */
// can create interfaces that are example objects
// creates a template using even method

interface Person {
    firstName: string;
    lastName: string;
    sayHi(): string; // this method returns a string, doesn't define function
}

const lily: Person = {
    firstName: "Lily",
    lastName: "Lam",
    sayHi() {
        return "Hello! I'm Lily";
    }
}

// can extend interfaces
interface SoftwareEngineer extends Person {
    learning: string;
}

const career: SoftwareEngineer = {
    firstName: "Lily",
    lastName: "Lam",
    sayHi() {
        return "Hello! I'm Lily";
    },
    learning: "Typescript",
};

// makes sure objects has ALL these properties.