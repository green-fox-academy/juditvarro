'use strict'

window.onload = () => {
  const host = 'http://localhost:8088';
  const http = new XMLHttpRequest();
  const mainContent = document.querySelector(".main_container");
  const answerContent = document.querySelector(".answer_container");
  const currentscore = document.querySelector("#actualScore");

  http.open('GET', `${host}/game`, true);

  http.onload = () => {
    if (http.status === 200) {
      const questionContent = JSON.parse(http.response);

      const question = document.createElement("h3");
      question.setAttribute("name", "question");
      const optionA = document.createElement("div");
      optionA.className = "option_A";
      const buttonA = document.createElement("button");
      buttonA.setAttribute("id", `${questionContent.answers[0].is_correct}`)
      const optionB = document.createElement("div");
      optionB.className = "option_B";
      const buttonB = document.createElement("button");
      buttonB.setAttribute("id", `${questionContent.answers[1].is_correct}`)
      const optionC = document.createElement("div");
      optionC.className = "option_C"
      const buttonC = document.createElement("button");
      buttonC.setAttribute("id", `${questionContent.answers[2].is_correct}`)
      const optionD = document.createElement("div");
      optionD.className = "option_D";
      const buttonD = document.createElement("button");
      buttonD.setAttribute("id", `${questionContent.answers[3].is_correct}`)

      mainContent.appendChild(question);

      optionA.appendChild(buttonA);
      optionB.appendChild(buttonB);
      optionC.appendChild(buttonC);
      optionD.appendChild(buttonD);

      answerContent.appendChild(optionA);
      answerContent.appendChild(optionB);
      answerContent.appendChild(optionC);
      answerContent.appendChild(optionD);

      fetch(`${host}/game`)
        .then((res) => res.json())
        .then((questionContent) => {
          question.innerHTML = questionContent.question;
          buttonA.innerHTML = questionContent.answers[0].answer;
          buttonB.innerHTML = questionContent.answers[1].answer;
          buttonC.innerHTML = questionContent.answers[2].answer;
          buttonD.innerHTML = questionContent.answers[3].answer;
        })

        setInterval(() => 
        fetch(`${host}/game`)
        .then((res) => res.json())
        .then((questionContent) => {
          question.innerHTML = questionContent.question;
          buttonA.innerHTML = questionContent.answers[0].answer;
          buttonB.innerHTML = questionContent.answers[1].answer;
          buttonC.innerHTML = questionContent.answers[2].answer;
          buttonD.innerHTML = questionContent.answers[3].answer;
        }), 5000)

      buttonA.addEventListener("click", function (e) {
        if (event.target.id === "1") {
          currentscore.textContent++;
        }
      })

      buttonB.addEventListener("click", function (e) {
        if (event.target.id === "1") {
          currentscore.textContent++;
        }
      })

      buttonC.addEventListener("click", function (e) {
        if (event.target.id === "1") {
          currentscore.textContent++;
        }
      })

      buttonD.addEventListener("click", function (e) {
        if (event.target.id === "1") {
          currentscore.textContent++;
        }
      })
    }
  }
  http.send();
}