// Create a Station and a Car classes
// Station
// gasAmount
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

'use strict'

export class Station {
  private gasAmount: number;
  constructor(gasAmount: number) {
    this.gasAmount = gasAmount;
  }

  refill(car) {
    let gasFilled: number = car.currentCapacity - car.currentGasAmountInCar;
    this.gasAmount = this.gasAmount - gasFilled;
    car.currentGasAmountInCar += car.currentGasAmountInCar + gasFilled;
    car.currentCapacity = car.currentCapacity - gasFilled;
  }
}

export class Car {
  private carType: string;
  private currentGasAmountInCar: number;
  private currentCapacity: number;
  constructor(carType: string, currentGasAmountInCar: number = 0, currentCapacity: number = 100) {
    this.carType = carType;
    this.currentGasAmountInCar = currentGasAmountInCar;
    this.currentCapacity = currentCapacity;
  }
}

let autoMobile: Car = new Car('Toyota');
let station: Station = new Station(500)

console.log(autoMobile);
console.log(station);

station.refill(autoMobile);

console.log(autoMobile);
console.log(station);


