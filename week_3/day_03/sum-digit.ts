// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function addedDigits(numToCount: number): number {
    let remainder: number = numToCount % 10
    if ((numToCount - remainder) !=0 ) {
        return remainder += addedDigits((numToCount - remainder) / 10);
    } else {
        return remainder;
    }
}
console.log(addedDigits(2002));

