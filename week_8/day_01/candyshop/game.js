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
  let startingCandies = parseInt(candies.innerHTML);
  candies.innerHTML = `${startingCandies + 1}`;
}

const buyLollypop = (event) => {
  let startingCandies = parseInt(candies.innerHTML);
  let startingLollypops = lollypops.innerHTML;
  if (startingCandies >= 100) {
    candies.innerHTML = `${startingCandies - 100}`;
    startingLollypops += "🍭";
    lollypops.innerHTML = startingLollypops;
  }
}

const candyGenerator = () => {
  let startingLollypops = lollypops.innerHTML;
  let starter = startingLollypops.length / 2;
  let startingCandies = parseInt(candies.innerHTML);
  if (starter >= 10) {
    candies.innerHTML = `${startingCandies + 1}`;
  }
}

const speeder = () => {
  let currentLolly = (lollypops.innerHTML).length / 2;
  let ratio = 1000 / (currentLolly / 10);
  return ratio;
}

speed.innerHTML = speeder() / 1000;

const candyGeneratorTimed = (function() {setInterval(function() {candyGenerator()}, speeder())});

createCandies.addEventListener("click", gimmeCandy);
buyLollypops.addEventListener("click", buyLollypop);
candyGeneratorTimed();


