'use strict'

window.onload = () => {
  const host = 'http://localhost:8088';
  const http = new XMLHttpRequest();
  const allQuestions = document.querySelector(".manage");


  http.open('GET', `${host}/questions`, true);

  http.onload = () => {
    if (http.status === 200) {
      const questionList = JSON.parse(http.response).questions;

      console.log(questionList);

      questionList.forEach(element => {
        let currentQuestion = document.createElement("div");
        currentQuestion.setAttribute("class", `${element.id}`);
        currentQuestion.innerHTML = element.question;

        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("name", "deleteButton");
        deleteButton.innerHTML = "delete";

        currentQuestion.appendChild(deleteButton);
        allQuestions.appendChild(currentQuestion);

        deleteButton.addEventListener("click", function (event) {
          console.log("delete");

          fetch(`${host}/questions/${element.id}`, {
            method: "delete",
          })
            .then(location.href = `${host}/questioning`);
        })
      });
    }
  }
  http.send();
}