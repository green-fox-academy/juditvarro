'use strict'

export abstract class Vehicle {
  protected type: string;
  protected yearOfProduction: number;
  protected flyingCapability: boolean;

  constructor(type: string, yearOfProduction: number, flyingcapability: boolean) {
    this.type = type;
    this.yearOfProduction = yearOfProduction;
    this.flyingCapability = flyingcapability;
  }
}