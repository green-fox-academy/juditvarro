// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnyEars(numOfBunnies: number){
    if(numOfBunnies <= 0){
        return 0;
    } else {
        return 2 + bunnyEars(numOfBunnies - 1);
    }
}

console.log(bunnyEars(10));
