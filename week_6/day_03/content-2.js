'use strict'

//   1) replace the list items' content with items from this list:
//   ['apple', 'banana', 'cat', 'dog']

var toReplace = document.getElementsByTagName('li');
var replaceArray = ['apple', 'banana', 'cat', 'dog'];

for (var i = 0; i < toReplace.length; i++) {
  toReplace[i].innerText = replaceArray[i];
}

//   2) change the <ul> element's background color to 'limegreen'
//     - use css class to change the color instead of the style property

var unorderedList = document.getElementsByTagName('ul');
unorderedList[0].setAttribute('style', 'background: limegreen');