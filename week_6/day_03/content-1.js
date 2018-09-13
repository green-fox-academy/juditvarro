'use strict'

    //   fill every paragraph with the last one's content.

// var paragraphContent = document.getElementsByTagName('p');
// for(var i = 0; i < paragraphContent.length - 1; i++) {
//   paragraphContent[i].innerText = paragraphContent[paragraphContent.length - 1].innerText;
// };

    //   fill every paragraph with the last one's content keeping the cat strong.

var paragraphContent = document.getElementsByTagName('p');
for(var i = 0; i < paragraphContent.length - 1; i++) {
  paragraphContent[i].innerHTML = paragraphContent[paragraphContent.length - 1].innerHTML;
};

