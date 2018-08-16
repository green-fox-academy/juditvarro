// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

let awesomeString: string = 'xxNoTy';

function stringChanger(text: string): string {
    
    if (text.length == 0) {
        return text;
    } else {
        let string = text[0];
        if (text.charAt(0) === 'x') {
            string = 'y';
        } else {
            string = string;
        }
        return string + stringChanger(text.slice(1));
    }
}
console.log(stringChanger(awesomeString));