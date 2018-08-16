// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function numPower(base: number, power: number){
    if(power == 0){
        return 1;
    } else {
        return base * numPower(base, power -1);
    }
}

console.log(numPower(5, 3));