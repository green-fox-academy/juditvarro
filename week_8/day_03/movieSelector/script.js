window.onload = () => {
  const genres = document.querySelector(".dropdown_genre");
  const films = document.querySelectorAll("option[type=movie]");
  const listToPresent = document.querySelector(".list");

  genres.addEventListener("change", (event) => {
    
    // listToPresent.innerHTML = "";
    
    // for (let i = 0; i < films.length; i++) {
    //   if (event.target.value === films[i].className) {
    //     let item = document.createElement("li");
    //     item.className = "listedmovie"
    //     item.innerHTML = films[i].title;
    //     listToPresent.appendChild(item);
    //   }
    // }

    for (let i = 0; i < films.length; i++) {
        if (event.target.value === films[i].className) {
          film[i].disabled = false;
        }
      }
  })
}