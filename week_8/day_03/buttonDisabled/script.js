window.onload = () => {

  const form = document.querySelector("#formhandler");
  const firstButtons = document.querySelector(".first_set");
  const secondButtons = document.querySelector(".second_set");
  const submitButton = document.querySelector("button[type=submit]");
  const catButton = document.querySelector("button[type=button]");

  firstButtons.addEventListener("change", (event) => {
    if (event.target.id === "dog" || event.target.id === "cat") {
      submitButton.disabled = false;
    }
  })

  secondButtons.addEventListener("change", (event) => {
    if (event.target.id === "yes") {
      catButton.disabled = false;
    }
  })

  firstButtons.addEventListener("change", (event) => {
    let checkedRadio = document.querySelector("input[id=no]").checked;
     
    if(event.target.id === "viktor" && checkedRadio != false) {
      submitButton.disabled = false;
    }
  })

  secondButtons.addEventListener("change", (event) => {
    let checkedRadio = document.querySelector("input[id=viktor]").checked;
     
    if(event.target.id === "no" && checkedRadio != false) {
      submitButton.disabled = false;
    }
  })

  submitButton.addEventListener("click", (event) => {
    alert("Thank you, you have successfully signed up!")
  })

  catButton.addEventListener("click", (event) => {
    alert("Thank you, you've successfully signed up for cat facts!")
  })
}