import { StringedInstrument } from "./stringed-instrument";

'use strict'

export class ElectricGuitar extends StringedInstrument {

  private soundOfInstrument: string;
  
  constructor(numberOfString: number = 6) {
    super();
    this.numberOfString = numberOfString;
    this.name = 'Electric Guitar'
    this.soundOfInstrument = 'Twang';
  }
  
  sound(): void {
    console.log(`${this.name}, a ${this.numberOfString}-stringed instrument that goes ${this.soundOfInstrument}.`);
  }
}
