
// On the click of the button,
//   Count the items in the list
// And display the result in the result element.

let counter = document.querySelector("button");
let list = document.querySelectorAll("li");
let resultLogged = document.querySelector("p");

counter.addEventListener("click", function() {
  let result = 0;
  for (let i = 0; i < list.length; i++) {
    result += 1;
  }
  resultLogged.innerText = `${result}`;
}); 
