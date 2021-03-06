
  // Create an event listener which logs the current timestamp to the console once the button is clicked.
  // When the button is clicked for the second or any other times no event listener should be called.
  // Try to solve this two different ways.
  // hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button

  let body = document.querySelector("body");
  let button = document.querySelector("button");

  button.addEventListener("click", function() {
    button.disabled = true;
    let element = document.createElement("p");
    element.innerHTML = new Date();
    body.appendChild(element);
  });

  button.addEventListener("click", function() {
    let element = document.createElement("p");
    element.innerHTML = new Date();
    body.appendChild(element);
  }, { once : true});