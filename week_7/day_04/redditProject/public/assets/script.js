'use strict'

window.onload = () => {
  const host = 'http://localhost:8084';
  const http = new XMLHttpRequest();
  const pageParent = document.querySelector('#maincontent');
  const pageMainChild = document.querySelector('#content');
  const submitButton = document.querySelector("button[type=submit]");

  http.open('GET', `${host}/posts`, true);

  http.onload = () => {
    if (http.status === 200) {
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

        let hidePost = document.createElement('button');
        hidePost.name = 'posthider';
        hidePost.innerText = 'hide this post';

        let modifyPost = document.createElement('button');
        modifyPost.name = 'postmodifyer';
        modifyPost.innerText = 'modify this post';

        let deletePost = document.createElement("button");
        deletePost.name = "delete";
        deletePost.innerText = "delete this post";

        upvote.appendChild(upVoteImg);
        downvote.appendChild(downVoteImg);

        voter.appendChild(upvote);
        voter.appendChild(scoreNum);
        voter.appendChild(downvote);

        separatePostContent.appendChild(link);
        separatePostContent.appendChild(timeOfPost);
        separatePostContent.appendChild(hidePost);
        separatePostContent.appendChild(modifyPost);
        separatePostContent.appendChild(deletePost);

        separateContainers.appendChild(voter);
        separateContainers.appendChild(separatePostContent);
        separatePost.appendChild(separateContainers);

        pageMainChild.appendChild(separatePost);
        pageParent.appendChild(pageMainChild);

        upvote.onclick = () => {
          upVoteImg.setAttribute("src", "assets/img/upvoted.png");
          upvote.addEventListener("mouseout", function (eventOne) {
            eventOne.target.setAttribute("src", "assets/img/upvote.png");
          })
        }

        downvote.onclick = () => {
          downVoteImg.setAttribute("src", "assets/img/downvoted.png");
        }

        downvote.addEventListener("mouseout", function (eventTwo) {
          eventTwo.target.setAttribute("src", "assets/img/downvote.png");
        })

        hidePost.addEventListener("click", function (e) {
          if ("clicked") {
            hidePost.parentElement.style.display = "none";
            let showPost = document.createElement('button');
            showPost.name = 'postshower';
            showPost.innerText = 'show this post again';
            separateContainers.appendChild(showPost);
            showPost.addEventListener("click", function (e) {
              if ("clicked") {
                hidePost.parentElement.style.display = "initial";
                separateContainers.removeChild(showPost);
              }
            })
          }
        });

        deletePost.addEventListener("click", function (e) {
          fetch(`${host}/posts/${element.id}`, {
            method: "delete",
          })  
          .then(location.href = `${host}`);
        })

      });

      submitButton.addEventListener("click", function (event) {
        location.href = `${host}/submit`;
      })
    }
  }
  http.send();
}