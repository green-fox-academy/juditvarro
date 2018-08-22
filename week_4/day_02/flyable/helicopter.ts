import { Vehicle } from "./vehicle";
import { Flyable } from "./flyableInterface";

'use strict'

export class Helicopter extends Vehicle implements Flyable {

  constructor(type: string, yearOfProduction: number, flyingcapability: boolean){
    super(type, yearOfProduction, flyingcapability);
  }

  land() {
    console.log(`The ${this.type} has landed at the airport.`);
  } 
  fly() 
  {
    console.log(`The ${this.type} has flown for 2 hours.`);
  }
  takeoff() {
    console.log(`The ${this.type} has took off at 10 AM.`);
  }
}
