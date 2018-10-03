'use strict'

window.onload = () => {
  const host = 'http://localhost:8088';
  const http = new XMLHttpRequest();
  const mainContent = document.querySelector(".main_container");
  const answerContent = document.querySelector(".answer_container");

  http.open('GET', `${host}/game`, true);

  http.onload = () => {
    if (http.status === 200) {
      const questionContent = JSON.parse(http.response);

      console.log(questionContent);
      
      const question = document.createElement("h3");
      question.setAttribute("name", "question");
      question.innerHTML = questionContent.question;

      const optionA = document.createElement("div");
      optionA.className = "option_A";
      const buttonA = document.createElement("button");
      buttonA.setAttribute("name", "optionA");
      buttonA.innerHTML = questionContent.answers[0].answer;

      const optionB = document.createElement("div");
      optionB.className = "option_B";
      const buttonB = document.createElement("button");
      buttonB.setAttribute("name", "optionB");
      buttonB.innerHTML = questionContent.answers[1].answer;

      const optionC = document.createElement("div");
      optionC.className = "option_C"
      const buttonC = document.createElement("button");
      buttonC.setAttribute("name", "optionC");
      buttonC.innerHTML = questionContent.answers[2].answer;

      const optionD = document.createElement("div");
      optionD.className = "option_D";
      const buttonD = document.createElement("button");
      buttonD.setAttribute("name", "optionD");
      buttonD.innerHTML = questionContent.answers[3].answer;

      mainContent.appendChild(question);
      
      optionA.appendChild(buttonA);
      optionB.appendChild(buttonB);
      optionC.appendChild(buttonC);
      optionD.appendChild(buttonD);

      answerContent.appendChild(optionA);
      answerContent.appendChild(optionB);
      answerContent.appendChild(optionC);
      answerContent.appendChild(optionD);
    }
  }
  http.send();
}