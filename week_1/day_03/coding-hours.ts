'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let dailyHours: number = 6;
let semester: number = 17;
let workDays: number = 5;

console.log(dailyHours * semester * workDays);

let codingHours: number = 510;
let workHoursWeekly: number = 52;
let workHours: number = workHoursWeekly * 17;

console.log((codingHours / workHours) * 100);



