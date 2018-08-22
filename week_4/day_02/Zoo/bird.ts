import { Animal } from "./animal";
import { AnimalsBreedingWithEggs } from "./breedingwitheggs";

'use strict'

export class Bird extends AnimalsBreedingWithEggs {
  protected featherStatus: boolean;
  protected weirdLegStatus: boolean;
  
  constructor(name: string, age?: number, gender?: string) {
    super(name, age, gender);
    this.featherStatus = true;
    this.weirdLegStatus = true;
  }

  breed(): string {
    return this.breedWithEggs();
  }
  
  eat(): void {
    this.hunger = false;
  }

  nesting(): void {
    console.log(`Hell yeah, I just made a pretty nest from sticks!- said ${this.name}`);
  }

  feedingFromBeak(): void {
    console.log(`Here you go lil' bird, eat!- said ${this.name}`);
  }
}
