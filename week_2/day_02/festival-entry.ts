'use strict';

const watchlist: string[] = [];
let securityAlcoholLoot: number = 0;
const queue: any[] = [
    { name: 'Amanda', alcohol: 10, guns: 1 },
    { name: 'Mark', alcohol: 0, guns: 0 },
    { name: 'Dolores', alcohol: 0, guns: 1 },
    { name: 'Wade', alcohol: 1, guns: 1 },
    { name: 'Anna', alcohol: 10, guns: 0 },
    { name: 'Rob', alcohol: 2, guns: 0 },
    { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns
// Create a securityCheck function that takes the queue as a parameter and returns a list 
// of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival


// Actual TASK:

let safetyList: string[] = [];

function securityCheck(input: any[]) {
    for (let lines: number = 0; lines < input.length; lines++) {


        /*
        if (input[lines].alcohol == 0 && input[lines].guns == 0) {
            safetyList.push(input[lines].name);
        } else {
            watchlist.push(input[lines].name);
            if(input[lines].alcohol > 0 && input[lines].guns == 0) {
                securityAlcoholLoot += input[lines].alcohol;
                input[lines].alcohol = 0;
                safetyList.push(input[lines].name);*/
            }
        }
    }
    return safetyList;
}

console.log(securityCheck(queue));

console.log(watchlist);

console.log(securityAlcoholLoot);

console.log(queue);







// Önszorgalom 101: listázni csak a neveket

//  Function + forLoop:
/*
function partyGoers(input: any []) {
    let queueLine: string[] = [];
    for (let i: number = 0; i < input.length; i++) {
        queueLine.push(input[i].name);
    }
    return queueLine;
}

console.log(partyGoers(queue));

    //  forEach:

let names: string[] = [];

queue.forEach(element => {
    names.push(element.name);
});
console.log(names);

*/

export = securityCheck;