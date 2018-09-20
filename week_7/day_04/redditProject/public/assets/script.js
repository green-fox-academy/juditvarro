'use strict'

window.onload = () => {
  const host = 'http://localhost:8084';
  const http = new XMLHttpRequest();
  const pageParent = document.querySelector('.container');
  
  http.open('GET', `${host}/posts`, true);

  http.onload = () => {
    if(http.status === 200) {
      const postList = JSON.parse(http.response);
     
      postList.posts.forEach(element => {
       
        let separatePost = document.createElement("div");
        let link = document.createElement("a");
        
        link.setAttribute('href', element.url);
        link.innerHTML = element.title;

        separatePost.appendChild(link);
        pageParent.appendChild(separatePost);
      });
    }
  }
  http.send();
}