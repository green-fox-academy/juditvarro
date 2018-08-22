import { Animal } from "./animal";

'use strict'

export abstract class AnimalsBreedingWithEggs extends Animal {
 
  breed(): string {
    return 'laying eggs.';
  }

  abstract eat(): void;
}