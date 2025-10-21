const questions = [{
  Que: "Which one is markup language?",
  a: "HTML",
  b: "CSS",
  c: "Javascript",
  d: "PHP",
  correct: "a"
},
{
  Que: "Which language runs in a web browser?",
  a: "Java",
  b: "C",
  c: "Python",
  d: "JavaScript",
  correct: "d"
},
{
  Que: "Which HTML tag is used to link JavaScript file?",
  a: "<link>",
  b: "<js>",
  c: "<script>",
  d: "<javascript>",
  correct: "c"
},
{
  Que: "Which symbol is used for comments in JavaScript?",
  a: "//",
  b: "/* */",
  c: "#",
  d: "<!-- -->",
  correct: "a"
},
{
  Que: "Which company developed the Java programming language?",
  a: "Microsoft",
  b: "Sun Microsystems",
  c: "Google",
  d: "IBM",
  correct: "b"
}
];

const quesBox = document.querySelector(".que");
const optionInputs = document.querySelectorAll(".option");
const submitBtn = document.querySelector(".btn");

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;


const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  const data = questions[index];
  quesBox.innerText = `${index + 1}) ${data.Que}`;
  const options = ['a', 'b', 'c', 'd'];
  optionInputs.forEach((input, i) => {
    input.nextElementSibling.innerText = data[options[i]];
input.checked=false; //clear previous selection
  });
};
const submitQuiz = () => {
  submitBtn.addEventListener("click", () => {
    const data=questions[index];
    const ans = getAns();
    if (ans === data.correct) {
      right++;
    }
    else {
      wrong++;
    }

    loadQuestion();
  });
};
const getAns = () => {
  for (let input of optionInputs) {
    if (input.checked) {
      return input.value; // ✅ this actually returns the value from getAns()
    }
  }
  return null;
};
const endQuiz=()=>{
  quesBox.innerHTML=
  <h2>Quiz Completed</h2>
  <p>Correct: ${right}</p>
  <p>Correct: ${right}</p>
<p>`Score: ${(right/total*100).toFixed(2)}%`</p>
}


loadQuestion();
submitQuiz();
