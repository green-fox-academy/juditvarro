import { Flower } from './flower';
import { Tree } from './tree';
import { Plant } from './plant';

export class Garden extends Plant {

  public allPlant: Plant[];
  public plantNeedsWater: Plant[];

  constructor() {
    super();
    this.allPlant = [];
    this.plantNeedsWater = [];
  }

  fillGarden(plantToAdd) {
    this.allPlant.push(plantToAdd)
  }

  getPlantsNeedWater() {
    this.allPlant.forEach(element => {
      if (element.currentWaterAmount < element.waterLimit) {
        this.plantNeedsWater.push(element);
      }
    })
    return this.plantNeedsWater;
  }

  clearWaterStatusOfGarden() {
    this.plantNeedsWater = [];
    this.getPlantsNeedWater();
  }

  watering(wateramount: number) {
    console.log(`\r\nWatering with ${wateramount}`);
    this.allPlant.forEach(element => {
      if (element.currentWaterAmount <= element.waterLimit) {
        element.currentWaterAmount += (wateramount / this.plantNeedsWater.length) * element.waterAbsorbAmount;
      }
    })
    this.getCurrentWateringStatus();
  }

  getCurrentWateringStatus() {
    this.allPlant.forEach(element => {
      if (element.currentWaterAmount <= element.waterLimit) {
        console.log(`The ${element.colorOfPlant} ${element.typeOfPlant} needs water.`)
      } else {
        console.log(`The ${element.colorOfPlant} ${element.typeOfPlant} doesn't need water.`);
      }
    })
  }
}