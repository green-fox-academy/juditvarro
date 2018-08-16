// Create a recursive function called `refactorio`
// that returns it's input's factorial


function refactorio(numToBeFactored: number): number {
 if(numToBeFactored === 1){
     return 1;
 } else {
    return numToBeFactored * (refactorio(numToBeFactored - 1))
 }
}

console.log(refactorio(4));
