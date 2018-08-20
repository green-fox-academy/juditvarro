// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

import { Sharpie } from './Sharpie'

class SharpieSet {
    private sharpieList: Sharpie[];
    constructor() {
        this.sharpieList = [];
    }

    addNewSharpie(newSharpie: Sharpie) {
        this.sharpieList.push(newSharpie);
    }
    countUsable() {
        let numOfUsable: number = 0;
        this.sharpieList.forEach(item => {
            if (item.inkAmount > 0) {
                numOfUsable++;
            }
            return numOfUsable;
        })
    }
}


