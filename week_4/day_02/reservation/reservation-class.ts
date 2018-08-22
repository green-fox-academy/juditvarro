import { Reservationy } from "./reservationy-interface";

'use strict'

export class Reservation implements Reservationy {

  getDowBooking(): string {
    let dowArray: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    let specificDay: string = dowArray[Math.floor(Math.random() * dowArray.length)];
    return `for ${specificDay}`;
  }
  getCodeBooking(): string {
    let bookingCode: number = 8;
    let characters: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let codeGenerator: string = '';
    for (let item: number = 0; item < bookingCode; item++) {
      codeGenerator += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return `Booking# ${codeGenerator} ${this.getDowBooking()}`;
  }
}

let booking1: Reservation = new Reservation();

function generateBookings(neededBooking: Reservation, numOfBooking: number): void {
  for(let recurrence: number = 0; recurrence < numOfBooking; recurrence++) {
    console.log(neededBooking.getCodeBooking()); 
  }
}

generateBookings(booking1, 10);