'use strict'

// Write the image's url to the console.

var img = document.getElementsByTagName('img')[0];
console.log(img.getAttribute('src'));

// Replace the image with a picture of your favorite animal.
img.setAttribute('src', "https://cdn1-www.dogtime.com/assets/uploads/gallery/austalian-shepherd-dog-breed-pictures/1-face.jpg")

// Make the link point to the Green Fox Academy website.
var linkToGF = document.getElementsByTagName('a')[0];
linkToGF.setAttribute('href', "https://www.greenfoxacademy.com/");

// Disable the second button.
var toDisable = document.querySelector('.this-one');
toDisable.setAttribute('disabled', true);

// Replace its text with 'Don't click me!'.
toDisable.innerText = "Dont't click me!";
