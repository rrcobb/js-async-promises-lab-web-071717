const questions = [
  {
    questionText: "Lightning never strikes in the same place twice",
    answer: false
  },
  {
    questionText:
      "Humans can distinguish between over one trillion different smells",
    answer: true
  },
  {
    questionText: "Goldfish only have a memory of about three seconds",
    answer: false
  }
];

let question;

function appendQuestion(question) {
  document.querySelector(".question-container").innerHTML =
    question.questionText;
}

function askQuestionThen(time) {
  question = questions[0];
  appendQuestion(question);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("worked!");
    }, time);
  });
}

function removeQuestion() {
  document.querySelector(".question-container").innerHTML = "";
  return new Promise((resolve, reject) => {
    resolve("removed");
  });
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion);
}

function trueAndFalseButtons() {
  return document.querySelectorAll(".true-false-list .btn");
}

function toggleClass(element, className) {
  if (element.className.includes(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(button => toggleClass(button, "hide"));
}

function displayQuestionOnClick() {
  toggleTrueAndFalseButtons();
  askQuestionThenRemoveQuestion(5).then(toggleTrueAndFalseButtons);
}
