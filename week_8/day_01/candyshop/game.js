// // Gather 10.000 candies!
// // Clicking the ‘Create candies’ button gives you 1 candy.
// // You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// // 10 lollipops generate 1 candy per second.
// // Use the 🍭 emoji to display the lollipops you have
// // Display the candy producton rate in the Candies / Second row
// // If you press the "make candy rain" button, the candy generation should speed up 10x

const candies = document.querySelector(".candies");
const lollypops = document.querySelector(".lollypops");
const speed = document.querySelector(".speed");

const createCandies = document.querySelector(".create-candies");
const buyLollypops = document.querySelector(".buy-lollypops");
const candyMachine = document.querySelector(".candy-machine");

const gimmeCandy = () => {
  let startingCandies = parseInt(candies.innerText);
  candies.innerText = `${startingCandies + 1}`;
  startingCandies = parseInt(candies.innerText);
}

const candyGenerator = () => {
  let startingLollypops = lollypops.innerText;
  let currentLollypopNum = startingLollypops.length / 2;
  if (currentLollypopNum >= 10) {
    gimmeCandy();
  }
}

function candyGeneratorTimed(input) {
  setInterval(function () { candyGenerator() }, input * 1000);
}

const buyLollypop = () => {
  let startingCandies = parseInt(candies.innerText);
  let startingLollypops = lollypops.innerText;
  let currentLollypopNum = startingLollypops.length / 2;
  let lollyMakerRatioSimple = currentLollypopNum / 10;

  if (startingCandies >= 100 && startingCandies <= 10000) {
    candies.innerText = `${startingCandies - 100}`;
    startingLollypops += "🍭";
    lollypops.innerText = startingLollypops;
  }
  if (currentLollypopNum >= 8 && startingCandies <= 10000) {
    candyGeneratorTimed(lollyMakerRatioSimple);
    getSpeedRatio();
  }
}

function getSpeedRatio(){
  let startingLollypops = lollypops.innerText;
  let currentLollypopNum = startingLollypops.length / 2;
  let currentRatio = currentLollypopNum / 10;
  speed.innerText = currentRatio;
}

createCandies.addEventListener("click", gimmeCandy);
buyLollypops.addEventListener("click", buyLollypop);

candyMachine.addEventListener("click", function () {
  let startingLollypops = lollypops.innerText;
  let currentLollypopNum = startingLollypops.length / 2;
  let lollyMakerRatioFast = currentLollypopNum / 100;
  candyGeneratorTimed(lollyMakerRatioFast);
  getSpeedRatio();
})


// let candies = document.querySelector(".candies");
// let lollypops = document.querySelector(".lollypops");
// let speed = document.querySelector(".speed");

// let createCandies = document.querySelector(".create-candies");
// let buyLollypops = document.querySelector(".buy-lollypops");
// let candyMachine = document.querySelector(".candy-machine");

// const gimmeCandy = (event) => {
//   let startingCandies = parseInt(candies.innerHTML);
//   candies.innerHTML = `${startingCandies + 1}`;
// }

// const buyLollypop = (event) => {
//   let startingCandies = parseInt(candies.innerHTML);
//   let startingLollypops = lollypops.innerHTML;
//   if (startingCandies >= 100) {
//     candies.innerHTML = `${startingCandies - 100}`;
//     startingLollypops += "🍭";
//     lollypops.innerHTML = startingLollypops;
//   }
// }

// const candyGenerator = () => {
//   let startingLollypops = lollypops.innerHTML;
//   let starter = startingLollypops.length / 2;
//   let startingCandies = parseInt(candies.innerHTML);
//   if (starter >= 10) {
//     candies.innerHTML = `${startingCandies + 1}`;
//   }
// }

// const speeder = () => {
//   let currentLolly = (lollypops.innerHTML).length / 2;
//   let ratio = 1000 / (currentLolly / 10);
//   return ratio;
// }

// speed.innerHTML = speeder() / 1000;

// const candyGeneratorTimed = (function() {setInterval(function() {candyGenerator()}, speeder())});

// createCandies.addEventListener("click", gimmeCandy);
// buyLollypops.addEventListener("click", buyLollypop);
// candyGeneratorTimed();