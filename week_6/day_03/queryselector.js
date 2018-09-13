'use strict'

var king = document.getElementById('b325');
console.log(king);

var businessLamp = document.querySelectorAll('.big');
businessLamp.forEach(item => 
  console.log(item.innerText));

var conceitedKing = document.querySelectorAll('section .asteroid');
conceitedKing.forEach(item => 
  alert(`${item.innerText}, this is an alert!`));

var noBusiness = document.querySelectorAll('div');
noBusiness.forEach(item =>
  console.log(`${item.innerText}.`));
