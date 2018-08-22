import { Flower } from "./flower";
import { Tree } from "./tree";
import { GreensInGarden } from "./greensInGarden";
import { Garden } from "./garden"


'use strict'

let newGarden: Garden = new Garden();
let newFlower1: Flower = new Flower('yellow', 'Flower');
let newFlower2: Flower = new Flower('blue', 'Flower');
let newTree1: Tree = new Tree('purple', 'Tree');
let newTree2: Tree = new Tree('orange', 'Tree');


newGarden.addingFlower(newFlower1);
newGarden.addingFlower(newFlower2);
newGarden.addingTree(newTree1);
newGarden.addingTree(newTree2);

newFlower1.currentStatusOfPlant();
newFlower2.currentStatusOfPlant();
newTree1.currentStatusOfPlant();
newTree2.currentStatusOfPlant();

newGarden.checkWaterFlower(newFlower1);
newGarden.checkWaterFlower(newFlower2);
newGarden.checkWaterTree(newTree1);
newGarden.checkWaterTree(newTree2);

console.log('\r\nWatering with 40');

newGarden.firstWateringFlower(newFlower1);
newGarden.firstWateringFlower(newFlower2);
newGarden.firstWateringTree(newTree1);
newGarden.firstWateringTree(newTree2);

newGarden.stillCheckingWaterFlower(newFlower1);
newGarden.stillCheckingWaterFlower(newFlower2);
newGarden.stillCheckingWaterTree(newTree1);
newGarden.stillCheckingWaterTree(newTree2);

console.log('\r\nWatering with 70');

newGarden.secondWateringFlower(newFlower1);
newGarden.secondWateringFlower(newFlower2);
newGarden.secondWateringTree(newTree1);
newGarden.secondWateringTree(newTree2);

