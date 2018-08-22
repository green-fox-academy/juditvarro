import { Instrument } from "./instrument";

'use strict'

export abstract class StringedInstrument extends Instrument {
  protected numberOfString: number;

  play(): void {
    this.sound();
  }
  abstract sound(): void;
}