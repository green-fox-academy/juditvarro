import { Printable } from "../printable-interface";
import { Comparable } from "./comparable-interface";

class DominoAgain implements Printable, Comparable {

    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }

    printAllFields(): void {
        console.log(this.values);
    }

    compareTo(other: DominoAgain): number {
        if(this.values[0] > other.values[0] ||
             this.values[0] === other.values[0] 
            && this.values[1] > other.values[1]) {
            return 1;
        } else if(this.values === other.values){
            return 0;
        } else {
            return -1;
        }
    }
}



export {DominoAgain};