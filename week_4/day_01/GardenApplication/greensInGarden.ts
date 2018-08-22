'use strict'

export class GreensInGarden {

  protected colorOfPlant: string;
  protected typeOfPlant: string;
  protected wateringStatusOfPlant: string;
  protected currentWaterAmountOfPlant: number;
  

  constructor(colorOfPlant?: string, typeOfPlant?: string) {
    this.colorOfPlant = colorOfPlant;
    this.typeOfPlant = typeOfPlant;
    this.wateringStatusOfPlant = this.wateringStatusOfPlant;
    this.currentWaterAmountOfPlant = this.currentWaterAmountOfPlant;
  }
}


