'use strict'

window.onload = () => {
  const host = 'http://localhost:8088';
  const http = new XMLHttpRequest();
  const allQuestions = document.querySelector(".manage");
  const subForm = document.querySelector("#form");

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

      const newQuestion = document.querySelector("input[name=question]");
      const newAnswers = document.querySelectorAll("input[name=answer]");
      const radios = document.querySelectorAll("input[name=is_correct]");

      subForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let questionResult = newQuestion.value;

        let answers = [];
        let results = [];

        for (let i = 0; i < newAnswers.length; i++) {
          answers.push(newAnswers[i].value);
        }
        
        for (let i = 0; i < radios.length; i++) {
          results.push(radios[i].checked);
        }
       
        const bodyToSend = {
          question: questionResult,
          answer1: answers[0],
          answer2: answers[1],
          answer3: answers[2],
          answer4: answers[3],
          isCorrect1: results[0],
          isCorrect2: results[1],
          isCorrect3: results[2],
          isCorrect4: results[3],
        }
      
      const URL = "http://localhost:8088/questions";

      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(bodyToSend)
      })
      .then(res => res.json())
      .then(window.location.href = "http://localhost:8088/questioning"
      )
    })
    }
  }
  http.send();
}