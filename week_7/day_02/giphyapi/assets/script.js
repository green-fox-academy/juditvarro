window.onload = () => {
  const host = 'http://localhost:3060';
  const http = new XMLHttpRequest();
  const giphyParent = document.querySelector('#giphys');
  http.open('GET', `${host}/api/giphy/alpaca`, true);
  console.log(http);

  http.onload = () => {
    if (http.status === 200) {
      const giphys = JSON.parse(http.response).data;
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
          if(gifImg.className === "clear") {
              gifImg.className = "blurry";
          } else {
            gifImg.className = "clear";
          }
        }

        gifButton.appendChild(gifImg);
        content.appendChild(gifButton);
        giphyParent.appendChild(content);
      });
    }
  }
  http.send();
}