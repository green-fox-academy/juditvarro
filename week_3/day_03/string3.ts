// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

let newString: string = 'This will be nice'

function starAdder(text: string): string {
    if (text.length === 1) {
        return text;
    } else {
        return text[0] + '*' + starAdder(text.slice(1));
    }
}

console.log(starAdder(newString));