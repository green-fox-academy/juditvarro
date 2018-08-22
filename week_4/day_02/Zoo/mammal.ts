import { Animal } from "./animal";

'use strict'

export class Mammal extends Animal {
  protected breastStatus: boolean;
  protected intelligentStatus: boolean;

  constructor(name: string, age?: number, gender?: string) {
    super(name, age, gender);
    this.breastStatus = true;
    this.intelligentStatus = true;
  }

  breed(): string {
    return 'pushing miniature versions out.';
  }

  eat(): void {
    this.hunger = false;
  }

  jumping(): void {
    console.log(`Oh man, I just jumped!- said ${this.name}`);
    this.hunger = true;
  }

  gettingDomesticated(): void {
    console.log(`Love me, Hooman!- said ${this.name}`);
    this.hunger = false;
  }
}
