import { Plant } from "./plant";

'use strict'

export class Flower extends Plant {

  constructor(colorOfPlant: string, typeOfPlant: string = 'Flower') {
    super();
    this.colorOfPlant = colorOfPlant;
    this.waterAbsorbAmount = 0.75;
    this.typeOfPlant = typeOfPlant;
    this.waterLimit = 5;
    this.currentWaterAmount = 0;
  }
}