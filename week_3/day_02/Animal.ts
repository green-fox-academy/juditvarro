// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

'use strict';

export class Animal {
  private hunger: number;
  private thirst: number;
  constructor(hunger: number = 50, thirst: number = 50) {
    this.hunger = hunger;
    this.thirst = thirst;
  }
  eat() {
    this.hunger = this.hunger - 1;
    return (this.hunger + ' shows how hungry this animal is right now.');
  }
  drink() {
    this.thirst = this.hunger - 1;
    return (this.thirst + ' shows how thirsty this animal is right now.');
  }
  play() {
    this.hunger = this.hunger + 1;
    this.thirst = this.thirst + 1;
    return (this.hunger + ' shows how hungry and ' + this.thirst + ' shows how thirsty this animal is after playing for a while.');
  }
}

let dog: Animal = new Animal();
let cat: Animal = new Animal(70, 70);
let alpaca: Animal = new Animal(45, 45);

console.log(dog);
console.log(cat);
console.log(alpaca);
console.log(cat.eat());
console.log(alpaca.drink());
console.log(dog.play());


