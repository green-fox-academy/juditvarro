window.onload = () => {
  const host = 'http://localhost:3060';
  const http = new XMLHttpRequest();
  const giphyParent = document.querySelector('#giphys');
  http.open('GET', `${host}/api/giphy/dog`, true);
  console.log(http);

  http.onload = () => {
    if (http.status === 200) {
      const giphys = JSON.parse(http.response).data;
      giphys.forEach(element => {
        let gifImg = document.createElement('img');
        // gifImg.classList.add('listview');
        gifImg.setAttribute('src', element.images.fixed_width.url);
        giphyParent.appendChild(gifImg);
      });
    }
  }
  http.send();
}