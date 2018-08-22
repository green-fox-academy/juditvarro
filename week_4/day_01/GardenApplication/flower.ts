import { GreensInGarden } from "./greensInGarden";

'use strict'

export class Flower extends GreensInGarden {

  protected waterAmount: number;
  protected absorbRatioOfPlant: number;

  constructor(colorOfPlant: string, typeOfPlant: string = 'Flower') {
    super(colorOfPlant, typeOfPlant);

    if (colorOfPlant === 'yellow') {
      this.colorOfPlant = colorOfPlant;
    } else if (colorOfPlant === 'blue') {
      this.colorOfPlant = colorOfPlant;
    } else {
      throw new Error('The flower can only be yellow or blue.');
    }

    this.currentWaterAmountOfPlant = 0;
    if (this.currentWaterAmountOfPlant < 5) {
      this.wateringStatusOfPlant = 'needs water';
    } else {
      this.wateringStatusOfPlant = 'doesnt need water';
    }
    this.waterAmount = 0;
    this.absorbRatioOfPlant = 0.75;
  }

  wateringFlower(waterAmount) {
    this.waterAmount = waterAmount;
    if (this.currentWaterAmountOfPlant < 5) {
      this.currentWaterAmountOfPlant = this.absorbRatioOfPlant * this.waterAmount;
      if (this.currentWaterAmountOfPlant < 5) {
        this.wateringStatusOfPlant = 'needs water';
      } else {
        this.wateringStatusOfPlant = 'doesnt need water';
      }
    }
    console.log(`The ${this.colorOfPlant} ${this.typeOfPlant} ${this.wateringStatusOfPlant}.`);
  }

  currentStatusOfPlant() {
    console.log(`The ${this.colorOfPlant} ${this.typeOfPlant} ${this.wateringStatusOfPlant}.`);
  }
}

