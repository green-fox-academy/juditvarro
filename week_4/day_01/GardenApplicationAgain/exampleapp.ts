import { Flower } from "./flower2";
import { Tree } from "./tree2";
import { Plants } from "./plants";
import { Garden } from "./garden2"

'use strict'

let newGarden: Garden = new Garden();
let newFlower1: Plants = new Flower('yellow');
let newFlower2: Plants = new Flower('blue');
let newTree1: Plants = new Tree('purple');
let newTree2: Plants = new Tree('orange');


newGarden.addingPlants(newFlower1);
newGarden.addingPlants(newFlower2);
newGarden.addingPlants(newTree1);
newGarden.addingPlants(newTree2);

newGarden.logGardenStatus(newGarden.allPlants);
newGarden.checkWaterPlants(newGarden.allPlants);
newGarden.wateringPlant(40, newGarden.plantsNeedWater);
newGarden.logGardenStatus(newGarden.allPlants);
newGarden.checkAfterWatering(newGarden.allPlants);
newGarden.wateringPlant(70, newGarden.plantsNeedWater);
newGarden.checkWaterPlants(newGarden.allPlants);
newGarden.logGardenStatus(newGarden.allPlants);







