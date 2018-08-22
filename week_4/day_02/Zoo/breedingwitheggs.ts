import { Animal } from "./animal";

'use strict'

export abstract class AnimalsBreedingWithEggs extends Animal {
  breedWithEggs(): string {
    return 'laying eggs.';
  }
}