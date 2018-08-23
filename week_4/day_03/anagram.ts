'use strict'

export function anagramChecker (firstWordToCheck: string, secondWordToCheck: string) {
  
  let string1 = firstWordToCheck.toLowerCase().split('').sort().join('').trim();
  let string2 = secondWordToCheck.toLowerCase().split('').sort().join('').trim();

  if(string1 === string2) {
    return true;
  } else {
    return false;
  }
}

console.log(anagramChecker('William Shakespeare', 'I am a weakish speller'));
