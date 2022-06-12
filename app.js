var quizQuestions = [
  {
    num: 1,
    question: "What official name was given to Pakistan in 1956 constitution",
    Option: {
      a: "Islamic Pakistan",
      b: "Islamic Republic Of Pakistan",
      c: "Republic Of Pakistan",
      d: "United States Of Paksitan",
    },
    answer: "Islamic Republic Of Pakistan",
  },
  {
    num: 2,
    question: "What does CSS stand for?",
    Option: {
      a: "Computer Style Sheets ",
      b: "Creative Style Sheets",
      c: "Colorful Style Sheets",
      d: "Cascading Style Sheets",
    },
    answer: "Cascading Style Sheets",
  },
  {
    num: 3,
    question: "How to write an IF statement in JavaScript?",
    Option: {
      a: "if i = 5",
      b: "if i == 5 then",
      c: "if (i == 5)",
      d: "if i = 5 then",
    },
    answer: "if (i == 5)",
  },
  {
    num: 4,
    question: "who is the present president of pakistan",
    Option: {
      a: "Arif Alvi",
      b: "Imran Khan",
      c: "Nawaz Sharif",
      d: "Zardari",
    },
    answer: "Arif Alvi",
  },
  {
    num: 5,
    question: "Gwadar Port is constructed in the province of",
    Option: {
      a: "Punjab",
      b: "Sindh",
      c: "Kpk ",
      d: "Balochistan",
    },
    answer: "Balochistan",
  },
  {
    num: 6,
    question: "How many total surah in quran",
    Option: {
      a: "113",
      b: "114",
      c: "112",
      d: "111",
    },
    answer: "114",
  },
  {
    num: 7,
    question: "Which character is used to indicate an end tag?",
    Option: {
      a: "^",
      b: "*",
      c: "/",
      d: "<",
    },
    answer: "<",
  },
];

var htmlQuestion = document.getElementById("htmlQuestion");
var htmlOptionLists = document.getElementsByClassName("htmlOptionList");
// console.log(quizQuestions[0].question);
// console.log(htmlOptionLists);
var nextQuesBtn = document.getElementById("nextQuesBtn");
var counterValue = document.getElementById("counterValue");
var quizBox = document.getElementById("quizBox");
var counter = 0;
var score = 0;
var resultValue = document.getElementById("resultValue");

function setQuestion() {
  htmlQuestion.innerHTML = quizQuestions[counter].question;
  htmlOptionLists[0].innerHTML = quizQuestions[counter].Option.a;
  htmlOptionLists[1].innerHTML = quizQuestions[counter].Option.b;
  htmlOptionLists[2].innerHTML = quizQuestions[counter].Option.c;
  htmlOptionLists[3].innerHTML = quizQuestions[counter].Option.d;
}

function nextQes() {
  counter++;

  console.log(counter);
  if (counter < quizQuestions.length) {
    setQuestion();
    counterValue.innerHTML = counter + 1 + " / " + quizQuestions.length;
  } else {
    console.log("hello");
    quizBox.style.display = "none";
    resultValue.className = "show";
    resultValue.innerHTML = score;
  }
  //  if(counter< quizQuestions.length)
  nextQuesBtn.className = "hide";

  for (var i = 0; i < htmlOptionLists.length; i++) {
    htmlOptionLists[i].classList.remove("disabled");
    htmlOptionLists[i].style.backgroundColor = "lightgrey";
  }
}
function checkAns(e) {
  //   console.log(e.innerHTML == quizQuestions[counter].answer);
  nextQuesBtn.className = "show";
  if (e.innerHTML == quizQuestions[counter].answer) {
    score += 10;
    console.log(score);
    e.style.backgroundColor = "#a8ff78";
  } else {
    e.style.backgroundColor = "#e74c3c";

    for (var i = 0; i < htmlOptionLists.length; i++) {
      if (htmlOptionLists[i].innerHTML == quizQuestions[counter].answer) {
        htmlOptionLists[i].style.backgroundColor = "#a8ff78";
      }
    }
  }


  for (var i = 0; i < htmlOptionLists.length; i++) {
    htmlOptionLists[i].className += " disabled";
  }
}

// if(quizQuestions < htmlOptionLists){
//   checkAns(e);
// }
// else{
//   resultValue.innerHTML=
//   ` <h3> your score  ${score} / ${htmlOptionLists.length} </h3> `;
//   resultValue.classList.remove("hide");
// }

