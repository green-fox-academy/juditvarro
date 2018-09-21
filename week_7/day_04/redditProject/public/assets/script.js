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
        separatePost.classList = "post";
        let upvote = document.createElement("img");
        upvote.setAttribute("src", "assets/img/upvote.png");
        let downvote = document.createElement("img");
        downvote.setAttribute("src", "assets/img/downvote.png");
        // let upvoted = document.createElement("img");
        // let upvoted = document.createElement("img");

        let scoreNum = document.createElement("div");
        scoreNum.innerHTML = element.score;
        scoreNum.classList = "score";
        
        let link = document.createElement("a");
        link.setAttribute("href", element.url);
        link.innerHTML = element.title;

        let timeOfPost = document.createElement("p");
        timeOfPost.innerText = `submitted ${element.timestamp} by ${element.owner}`;
        
        separatePost.appendChild(upvote);
        separatePost.appendChild(scoreNum);
        separatePost.appendChild(downvote);
        separatePost.appendChild(link);
        separatePost.append(timeOfPost);
        pageParent.appendChild(separatePost);
      });
    }
  }
  http.send();
}