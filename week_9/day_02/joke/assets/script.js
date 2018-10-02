'use strict'

window.onload = () => {
  const host = 'http://localhost:8086';
  const http = new XMLHttpRequest;
  const jokeButton = document.querySelector("button");
  const joke = document.querySelector(".jokeymokey");

  http.open('GET', `${host}/api`, true);

  http.onload = () => {

    let newJoke = document.createElement("p");

    if (http.status === 200) {

      jokeButton.addEventListener("click", function (event) {     
        
        fetch(`${host}/api`)
       .then(res => res.json())
          .then(res => {
            newJoke.innerHTML = res.value.joke;
            joke.appendChild(newJoke);
          })
      })
    }
  }
  http.send();
}