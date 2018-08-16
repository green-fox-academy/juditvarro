// Given a string, compute recursively a new string where all the 'x' chars have been removed.

let awesomeStringAgain: string = 'xxNoTy';

function stringChanger(text: string): string {
    
    if (text.length == 0) {
        return text;
    } else {
        let string = text[0];
        if (text.charAt(0) === 'x') {
            string = '';
        } else {
            string = string;
        }
        return string + stringChanger(text.slice(1));
    }
}

console.log(stringChanger(awesomeStringAgain));