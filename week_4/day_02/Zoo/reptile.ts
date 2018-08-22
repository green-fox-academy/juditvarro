import { Animal } from "./animal";
import { AnimalsBreedingWithEggs } from "./breedingwitheggs";

'use strict'

export class Reptile extends AnimalsBreedingWithEggs {
  protected amphibianStatus: boolean;
  protected endangeredStatus: boolean;

  constructor(name: string, age?: number, gender?: string) {
    super(name, age, gender);
    this.amphibianStatus = true;
    this.endangeredStatus = false;
  }

  breed(): string {
    return this.breedWithEggs();
  }

  eat(): void {
    this.hunger = false;
  }

  swimming(): void {
    console.log(`Just keep swimming!- said ${this.name}`);
    this.hunger = true;
  }

  moulting(): void {
    console.log(`It was time to change my clothes, sorry!- said ${this.name}`);
  }
}
