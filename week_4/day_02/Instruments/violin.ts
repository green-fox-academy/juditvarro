import { StringedInstrument } from "./stringed-instrument";

'use strict'

export class Violin extends StringedInstrument {

  private soundOfInstrument: string;
  
  constructor(numberOfString: number = 4) {
    super();
    this.numberOfString = numberOfString;
    this.name = 'Violin'
    this.soundOfInstrument = 'Screech';
  }
  
  sound(): void {
    console.log(`${this.name}, a ${this.numberOfString}-stringed instrument that goes ${this.soundOfInstrument}.`);
  }
}
