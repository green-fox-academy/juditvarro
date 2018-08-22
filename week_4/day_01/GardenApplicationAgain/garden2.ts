import { Flower } from "./flower2";
import { Tree } from "./tree2";
import { Plants } from "./plants";

'use strict'

export class Garden extends Plants {

  public allPlants: string[];
  public plantsNeedWater: string[];

  constructor() {
    super();
    this.allPlants = [];
    this.plantsNeedWater = [];
  }

  addingPlants(plantToAdd): void {
    this.allPlants.push(plantToAdd);
  }

  checkWaterPlants(plantToCheck) {
    plantToCheck.forEach(element => {
      if ((element.currentWaterAmountOfPlant < 5) && element.typeOfPlant === 'Flower') {
        this.plantsNeedWater.push(element);
        element.wateringStatusOfPlant = 'needs water';
      } else {
        element.wateringStatusOfPlant = 'doesnt need water';
      }
    })
    plantToCheck.forEach(element2 => {
      if ((element2.currentWaterAmountOfPlant < 10) && element2.typeOfPlant === 'Tree') {
        this.plantsNeedWater.push(element2);
        element2.wateringStatusOfPlant = 'needs water';
      } else {
        element2.wateringStatusOfPlant = 'doesnt need water';
      }
    })
  }

  logGardenStatus(plantToLog) {
    plantToLog.forEach(element3 => {
      console.log(`The ${element3.colorOfPlant} ${element3.typeOfPlant} ${element3.wateringStatusOfPlant}.`);
    })
  }

  wateringPlant(wateringAmount, plantsToWater) {
    console.log(`\r\nWatering with ${wateringAmount}`);
    wateringAmount = wateringAmount / plantsToWater.length;
    
    plantsToWater.forEach(element4 => {
      if ((element4.currentWaterAmountOfPlant < 5) && element4.typeOfPlant === 'Flower') {
        element4.currentWaterAmountOfPlant += (element4.absorbRatioOfPlant * wateringAmount);
      }
    })
    plantsToWater.forEach(element4 => {
      if ((element4.currentWaterAmountOfPlant < 10) && element4.typeOfPlant === 'Tree') {
        element4.currentWaterAmountOfPlant += (element4.absorbRatioOfPlant * wateringAmount);
      }
    })
  }

  checkAfterWatering(wateredPlants) {
    this.plantsNeedWater = wateredPlants.filter(element5 => {
      return (element5.wateringStatusOfPlant === 'needs water')
    })    
  }
}
