import { Plant } from "./plant";

'use strict'

export class Tree extends Plant {

  constructor(colorOfPlant: string, typeOfPlant: string = 'Tree') {
    super();
    this.colorOfPlant = colorOfPlant;
    this.waterAbsorbAmount = 0.4;
    this.typeOfPlant = typeOfPlant;
    this.waterLimit = 10;
    this.currentWaterAmount = 0;
  }
}