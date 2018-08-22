import { Plants } from "./plants";

'use strict'

export class Tree extends Plants {

  constructor(colorOfPlant: string, typeOfPlant: string = 'Tree') {
    super();
    this.colorOfPlant = colorOfPlant;
    this.typeOfPlant = typeOfPlant;

    this.currentWaterAmountOfPlant = 0;
    if (this.currentWaterAmountOfPlant < 10) {
      this.wateringStatusOfPlant = 'needs water';
    } else {
      this.wateringStatusOfPlant = 'doesnt need water';
    }
    this.absorbRatioOfPlant = 0.4;
  }
}

