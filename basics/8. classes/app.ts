/* !!! FOR READABILITY READ TS FILE !!! */

/* === CLASSES === */
// very similar to regular JavaScript but slightly different.

class Car  {
    // fields
    make: string;
    model: string;
    year: number;

    // constructor
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

const personCar = new Car("Honda", "CRV", 2018);

// extending
class RaceCar extends Car {
    number: number;
    sponsor: string;

    constructor(make: string, model: string, year: number, number:number, sponsor: string) {
        super(make, model, year);
        this.number = number;
        this.sponsor = sponsor;
    }
}

const businessCar = new RaceCar("Chevy", "Custom", 2021, 4, "Target");