'use strict'

import { Flower } from './flower';
import { Tree } from './tree';
import { Plant } from './plant';
import { Garden } from './garden';

let newGarden: Garden = new Garden();
let newFlowerOne: Flower = new Flower('yellow');
let newFlowerTwo: Flower = new Flower('blue');
let newTreeOne: Tree = new Tree('purple');
let newTreeTwo: Tree = new Tree('orange');

newGarden.fillGarden(newFlowerOne);
newGarden.fillGarden(newFlowerTwo);
newGarden.fillGarden(newTreeOne);
newGarden.fillGarden(newTreeTwo);

newGarden.getPlantsNeedWater();
newGarden.getCurrentWateringStatus();
newGarden.watering(40);
newGarden.clearWaterStatusOfGarden();
newGarden.watering(70);

