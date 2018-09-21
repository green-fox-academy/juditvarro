'use strict'

window.onload = () => {
  const host = 'http://localhost:8084';
  const http = new XMLHttpRequest();
  const pageParent = document.querySelector('#maincontent');
  const pageMainChild = document.querySelector('#content');
  
  http.open('GET', `${host}/posts`, true);

  http.onload = () => {
    if(http.status === 200) {
      const postList = JSON.parse(http.response);

      postList.posts.forEach(element => {
    
        let separateContainers = document.createElement("div");
        separateContainers.className = "container";
       
        let separatePost = document.createElement("div");
        separatePost.className = "post";

        let separatePostContent = document.createElement("div");
        separatePostContent.className = "postcontent";

        let voter = document.createElement("div");
        voter.className = "voter";
        let upvote = document.createElement("button");
        upvote.name = "buttonUp";
        let upVoteImg = document.createElement("img");
        upVoteImg.setAttribute("src", "assets/img/upvote.png");

        let downvote = document.createElement("button");
        downvote.name = "buttonDown";
        let downVoteImg = document.createElement("img");
        downVoteImg.setAttribute("src", "assets/img/downvote.png");

        let scoreNum = document.createElement("div");
        scoreNum.innerHTML = element.score;
        scoreNum.className = "score";
        
        let link = document.createElement("a");
        link.setAttribute("href", element.url);
        link.innerHTML = element.title;

        let timeWithoutDay = element.timestamp.substring(0, 10);

        let timeOfPost = document.createElement("p");
        timeOfPost.innerText = `submitted ${timeWithoutDay} by ${element.owner}`;
                
        upvote.appendChild(upVoteImg);
        downvote.appendChild(downVoteImg);

        voter.appendChild(upvote);
        voter.appendChild(scoreNum);
        voter.appendChild(downvote);

        separatePostContent.appendChild(link);
        separatePostContent.appendChild(timeOfPost);

        separateContainers.appendChild(voter);
        separateContainers.appendChild(separatePostContent);
        separatePost.appendChild(separateContainers);

        pageMainChild.appendChild(separatePost);
        pageParent.appendChild(pageMainChild);
      });
    }
  }
  http.send();
}