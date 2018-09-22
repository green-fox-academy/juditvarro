window.onload = () => {
  const host = 'http://localhost:3060';
  const http = new XMLHttpRequest();
  const giphyParent = document.querySelector('#giphys');
  const buttonParent = document.querySelector('#showallbuttons');
  http.open('GET', `${host}/api/giphy/alpaca`, true);
  console.log(http);

  http.onload = () => {
    if (http.status === 200) {
      const giphys = JSON.parse(http.response).data;

      let showclass = document.createElement('div');
      let hideclass = document.createElement('div');
      let showAll = document.createElement('button');
      showAll.className = "showall";
      showAll.innerText = "Please show them all, I cannot wait!"
      let hideAll = document.createElement('button');
      hideAll.className = "hideall";
      hideAll.innerText = "Please hide them, too much cuteness!"

      showclass.appendChild(showAll);
      hideclass.appendChild(hideAll);
      buttonParent.appendChild(showclass);
      buttonParent.appendChild(hideclass);

      giphys.forEach(element => {
        let content = document.createElement('div');
        content.className = 'giphypack';

        let gifButton = document.createElement('button');
        let gifImg = document.createElement('img');
        gifImg.className = "blurry";
        gifImg.setAttribute('src', element.images.fixed_width.url);
        gifImg.setAttribute('width', "150");
        gifImg.setAttribute('height', "150");

        gifButton.onclick = () => {
          if (gifImg.className === "clear") {
            gifImg.className = "blurry";
          } else {
            gifImg.className = "clear";
          }
        }

        showAll.onclick = () => {
          let buttons = document.querySelectorAll(".blurry");
          Array.from(buttons).forEach(itemOne => {
              itemOne.className = "clear";
          })
        }

        hideAll.onclick = () => {
          let buttons = document.querySelectorAll(".clear");
          Array.from(buttons).forEach(itemTwo => {
              itemTwo.className = "blurry";
          })
        }

        gifButton.appendChild(gifImg);
        content.appendChild(gifButton);
        giphyParent.appendChild(content);
      });
    }
  }
  http.send();
}