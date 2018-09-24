// Create a simple HTML document with one button.
// If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, a text should appear under the button:
// 5 seconds elapsed and clicked 3 times
// If the user starts clicking before the first 5 seconds, nothing should be printed

let body = document.querySelector("body");
let button = document.querySelector("button");

document.onload = setTimeout(function(){mainFunction()}, 5000);

const mainFunction = function () {
  button.addEventListener("click", function () {
    button.className = "clickedOnce";
    if (button.className === "clickedOnce") {
      button.addEventListener("click", function () {
        button.className = "clickedTwice"
        if (button.className === "clickedTwice") {
          button.addEventListener("click", function () {
            show();
            button.disabled = true;
          })
        }
      })
    }
  })
}

const show = function () {
  let newPhar = document.createElement("h1");
  newPhar.innerHTML = "5 seconds elapsed and clicked 3 times";
  body.appendChild(newPhar);
};