import { Person } from "./person";
import { Student } from "./student";
import { Sponsor } from "./sponsor";
import { Mentor } from "./mentor";

'use strict'

export class Cohort {
  name: string;
  students: string[];
  mentors: string[];

  constructor(name: string) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }

  addStudent(Student): void {
    this.students.push(Student);
  }

  addMentor(Mentor): void {
    this.mentors.push(Mentor);
  }

  info(): void {
    console.log(`The ${this.name} cohort has ${this.students.length} 
    students and ${this.mentors.length} mentors.`);
  }
}