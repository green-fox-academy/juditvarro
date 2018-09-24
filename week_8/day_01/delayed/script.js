// If the user clicks the button it should wait 2 seconds and it should show a text under the button: 2 seconds ellapsed

let body = document.querySelector("body");
let button = document.querySelector("button");

function randomText(){
  let newText = document.createElement("h3");
  newText.innerHTML = "This is some random text, 2 seconds after You pushed that button.";
  body.appendChild(newText);
}

button.addEventListener("click", function(){
  setTimeout(function(){randomText()}, 2000);  
});

