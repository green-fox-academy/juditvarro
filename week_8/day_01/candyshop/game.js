// Gather 10.000 candies!
// Clicking the ‘Create candies’ button gives you 1 candy.
// You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// 10 lollipops generate 1 candy per second.
// Use the 🍭 emoji to display the lollipops you have
// Display the candy producton rate in the Candies / Second row
// If you press the "make candy rain" button, the candy generation should speed up 10x

let candies = document.querySelector(".candies");
let lollypops = document.querySelector(".lollypops");
let speed = document.querySelector(".speed");

let createCandies = document.querySelector(".create-candies");
let buyLollypops = document.querySelector(".buy-lollypops");
let candyMachine = document.querySelector(".candy-machine");

const gimmeCandy = (event) => {
  let startingNo = parseInt(candies.innerHTML);
  let upWithOne = startingNo + 1;
  candies.innerHTML = `${upWithOne}`;
}

createCandies.addEventListener("click", gimmeCandy);

