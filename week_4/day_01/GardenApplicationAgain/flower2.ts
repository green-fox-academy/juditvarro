import { Plants } from "./plants";

'use strict'

export class Flower extends Plants {

  constructor(colorOfPlant: string, typeOfPlant: string = 'Flower') {
    super();
    this.colorOfPlant = colorOfPlant;
    this.typeOfPlant = typeOfPlant;

    this.currentWaterAmountOfPlant = 0;
    if (this.currentWaterAmountOfPlant < 5) {
      this.wateringStatusOfPlant = 'needs water';
    } else {
      this.wateringStatusOfPlant = 'doesnt need water';
    }
    this.absorbRatioOfPlant = 0.75;
  }
}

