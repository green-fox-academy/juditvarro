'use strict'

window.onload = () => {
  const host = 'http://localhost:8088';
  const http = new XMLHttpRequest();

  http.open('GET', `${host}/posts`, true);

  http.onload = () => {
    if (http.status === 200) {
      const postList = JSON.parse(http.response);

    }
  }
  http.send();
}