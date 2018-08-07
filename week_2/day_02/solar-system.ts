'use strict';

// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];

// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Saturn"

// Correct Position:

function putSaturnRight (listOfPlanets: string[]) {
    listOfPlanets.splice(5, 0, 'Saturn');
    return listOfPlanets;
}

// Expected Outcome:

function putSaturn (listOfPlanets: string[]) {
    return listOfPlanets.concat('Saturn');
} 

console.log(putSaturn(planetList));
console.log(putSaturnRight(planetList));

export = putSaturn;



