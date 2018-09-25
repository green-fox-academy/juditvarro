const click = document.querySelector(".click");
const hover = document.querySelector(".hover");
const leave = document.querySelector(".leave");
const key = document.querySelector(".key");
const bubbling = document.querySelector(".bubbling");

const blur = document.querySelector(".blur");
const change = document.querySelector(".change");
const focus = document.querySelector(".focus");
const select = document.querySelector(".select");

const form = document.querySelector(".form");

const getRandom = () => {
  return Math.floor(Math.random() * 255);
}
const getRandomColor = () => {
  return `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
}

// click.addEventListener("click", (event) => {
//   click.style.backgroundColor = getRandomColor();
// })
// hover.addEventListener("mouseenter", (event) => {
//   hover.style.backgroundColor = getRandomColor();
// })
// REFAKTORÁLT:

const callback = (event) => {
  event.target.style.backgroundColor = getRandomColor();
}

// click.addEventListener("click", callback);
// hover.addEventListener("mouseenter", callback);
// REFAKTORÁLT:

click.onclick = callback;
hover.onmouseenter = callback;
leave.addEventListener("mouseleave", callback);

// document.addEventListener("keypress", (event) => {
//   console.log(event.keyCode);
// })


document.addEventListener("keyup", (event) => {
  key.innerHTML = `Keycode: ${event.keyCode}`;
})

bubbling.addEventListener("click", (event) => {
 if (event.target.dataset.cica === "one") {
    console.log(event.target.innerHTML);
 } else if(event.target.dataset.cica === "two") {
  console.log(event.target.innerHTML);  
 }
});

blur.addEventListener("blur", callback);
change.addEventListener("change", callback);
focus.addEventListener("focus", callback);
select.addEventListener("select", callback);


let obj = {};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { blur, change, focus, select } = event.target.elements; //az egyenlőségjel utáni rész előtagja lentebb
  obj = {
    blur: blur.value,
    change: change.value,
    focus: focus.value,
    select: select.value,
  }
  console.log(obj);
})

