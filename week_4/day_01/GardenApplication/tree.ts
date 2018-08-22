import { GreensInGarden } from "./greensInGarden";

'use strict'

export class Tree extends GreensInGarden {

  protected waterAmount: number;
  protected absorbRatioOfPlant: number;

  constructor(colorOfPlant: string, typeOfPlant: string = 'Tree') {
    super(colorOfPlant, typeOfPlant);

    if (colorOfPlant === 'purple') {
      this.colorOfPlant = colorOfPlant;
    } else if (colorOfPlant === 'orange') {
      this.colorOfPlant = colorOfPlant;
    } else {
      throw new Error('The tree can only be purple or orange.');
    }

    this.currentWaterAmountOfPlant = 0;
    if (this.currentWaterAmountOfPlant < 10) {
      this.wateringStatusOfPlant = 'needs water';
    } else {
      this.wateringStatusOfPlant = 'doesnt need water';
    }
    this.waterAmount = 0;
    this.absorbRatioOfPlant = 0.40;
  }

  wateringTree(waterAmount) {
    this.waterAmount = waterAmount;
    if (this.currentWaterAmountOfPlant < 10) {
      this.currentWaterAmountOfPlant = this.absorbRatioOfPlant * this.waterAmount;
      if (this.currentWaterAmountOfPlant < 10) {
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
