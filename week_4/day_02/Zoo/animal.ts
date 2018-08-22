'use strict'

export abstract class Animal {
  protected name: string;
  protected age: number;
  protected gender: string;
  protected hunger: boolean;

  constructor(name: string, age: number = 1, gender: string = 'male') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hunger = false;
  }

  getName(): string {
    return `${this.name}`;
  }

  abstract breed(): void;
  abstract eat(): void;
}