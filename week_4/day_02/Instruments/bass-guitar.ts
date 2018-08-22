import { StringedInstrument } from "./stringed-instrument";

'use strict'

export class BassGuitar extends StringedInstrument {

  private soundOfInstrument: string;
  
  constructor(numberOfString: number = 4) {
    super();
    this.numberOfString = numberOfString;
    this.name = 'Bass Guitar'
    this.soundOfInstrument = 'Duum-duum-duum';
  }
  
  sound(): void {
    console.log(`${this.name}, a ${this.numberOfString}-stringed instrument that goes ${this.soundOfInstrument}.`);
  }
}
