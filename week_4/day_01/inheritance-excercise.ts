'use strict'

export class Person {
  name: string;
  age: number;
  gender: string;
  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  introduce() {
    console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ' years old ' + this.gender + '.');
  }
  getGoal() {
    console.log('"My goal is: Live for the moment!"')
  }
}

export class Student {
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number;
  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School of Life', skippedDays: number) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }
  introduce() {
    console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ' years old ' + this.gender + ' from ' + this.previousOrganization + ' who skipped ' + this.skippedDays + ' days from the course already.');
  }
  getGoal() {
    console.log('"Be a junior software developer."');
  }
  skipDays(numberOfDays: number) {
    console.log(this.skippedDays + numberOfDays);
  }
}

export class Mentor {
  name: string;
  age: number;
  gender: string;
  level: string;
  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }
  introduce() {
    console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ' years old ' + this.gender + this.level + ' mentor.');
  }
  getGoal() {
    console.log('"Educate brilliant junior software developers."');
  }
}

export class Sponsor {
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;
  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google', hiredStudents: number = 0){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
    this.hiredStudents = hiredStudents;
  }
  introduce() {
    console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ' years old ' + this.gender + ' who represents ' + this.company + ' and hired ' + this.hiredStudents + ' students so far.');
  }
  hire(){
    console.log(this.hiredStudents += 1);
  }
  getGoal() {
    console.log('"Hire brilliant junior software developers."');
  }
}




