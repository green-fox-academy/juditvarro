import { Printable } from "../../week_4/day_02/printable-interface";

class Domino implements Printable {

    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }

    printAllFields(): void {
        console.log(this.values);
    }
}

export {Domino};