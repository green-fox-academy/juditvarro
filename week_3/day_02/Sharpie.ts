'use strict'

export class Sharpie {
    private color: string;
    private width: number;
    private inkAmount: number;
    constructor(color: string, width: number, inkAmount: number = 100) {
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
    }
    use() {
        this.inkAmount = this.inkAmount - 1;
        return this.inkAmount;
    }
}

let sharpy: Sharpie = new Sharpie('blue', 10, 100);

console.log(sharpy);
console.log(sharpy.use());
