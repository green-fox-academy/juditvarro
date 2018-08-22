import { Flower } from "./flower";
import { Tree } from "./tree";
import { GreensInGarden } from "./greensInGarden";

'use strict'

export class Garden extends GreensInGarden {

  private allPlants: string[];
  private plantsNeedWater: string[];
  private plantsStillNeedWater: string[];

  constructor() {
    super();
    this.allPlants = [];
    this.plantsNeedWater = [];
    this.plantsStillNeedWater = [];
  }

  addingTree(Tree): void {
    this.allPlants.push(Tree);
  }

  addingFlower(Flower): void {
    this.allPlants.push(Flower);
  }

  checkWaterFlower(Flower) {
    if (Flower.currentWaterAmountOfPlant < 5) {
      this.plantsNeedWater.push(Flower);
    }
  }

  checkWaterTree(Tree) {
    if (Tree.currentWaterAmountOfPlant < 10) {
      this.plantsNeedWater.push(Tree);
    }
  }

  stillCheckingWaterFlower(Flower) {
    if (Flower.currentWaterAmountOfPlant < 5) {
      this.plantsStillNeedWater.push(Flower);
    }
  }

  stillCheckingWaterTree(Tree) {
    if (Tree.currentWaterAmountOfPlant < 10) {
      this.plantsStillNeedWater.push(Tree);
    }
  }

  firstWateringFlower(Flower) {
    if (Flower.currentWaterAmountOfPlant < 5) {
      Flower.wateringFlower(40 / this.plantsNeedWater.length);
    } else {
      Flower.currentStatusOfPlant();
    }
  }

  firstWateringTree(Tree) {
    if (Tree.currentWaterAmountOfPlant < 10) {
      Tree.wateringTree(40 / this.plantsNeedWater.length);
    } else {
      Tree.currentStatusOfPlant();
    }
  }

  secondWateringFlower(Flower) {
    if (Flower.currentWaterAmountOfPlant < 5) {
      Flower.wateringFlower(70 / this.plantsStillNeedWater.length);
    } else {
      Flower.currentStatusOfPlant();
    }
  }

  secondWateringTree(Tree) {
    if (Tree.currentWaterAmountOfPlant < 10) {
      Tree.wateringTree(70 / this.plantsStillNeedWater.length);
    } else {
      Tree.currentStatusOfPlant();
    }
  }
}
