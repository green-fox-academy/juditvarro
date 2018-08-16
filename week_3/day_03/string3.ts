// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

let newString: string = 'This will be nice'

function starAdder(text: string): string {
    if (text.length === 1) {
        return text;
    } else {
        let string = text[0];
        if (text.charAt(0) === ' ') {
            return string = ' ' + starAdder(text.slice(1));
        } else {
            return string + '*' + starAdder(text.slice(1));
        }
    }
}
console.log(starAdder(newString));