import { Person } from "./person";

'use strict'

export class Student extends Person {

  private previousOrganization: string;
  private skippedDays: number;

  constructor(name: string = 'Jane Doe', age: number = 30,
  gender: string = 'female', previousOrganization: string = 'School of Life') {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }

  getGoal(): void {
    console.log('My goal is: Be a junior software developer.');
  }

  introduce(): void {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} years old
    ${this.gender}, from ${this.previousOrganization}, who skipped ${this.skippedDays} days from the course already.`);
  }

  skipDays(numberOfDays: number): void {
    this.skippedDays += numberOfDays;
  }
}


