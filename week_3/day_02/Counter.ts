// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

'use strict'

export class Counter {
    private numberOfCounts: number;

    constructor(numberOfCounts: number = 0) {
        this.numberOfCounts = numberOfCounts;
    }
    add(numberToAdd?: number) {
        let newCounts: number;
        if (numberToAdd % 1 == 0) {
            newCounts = this.numberOfCounts + numberToAdd;
        } else if (numberToAdd == undefined){
            newCounts = this.numberOfCounts + 1;
        }
        return newCounts;
    }
    get() {
        return this.numberOfCounts.toString();
    }
    reset() {
        return this.numberOfCounts;
    }
}

let counters: Counter = new Counter(10);

console.log(counters);
console.log(counters.add(20));
console.log(counters.get());
console.log(counters.reset());



