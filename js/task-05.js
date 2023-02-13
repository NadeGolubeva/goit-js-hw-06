// Напиши скрипт который, при наборе текста в инпуте input#name - input
//     (событие input), подставляет его текущее значение в span#name -
//     output.Если инпут пустой, в спане должна отображаться строка
// "Anonymous".

{
  /* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */
}

const span = document.querySelector("span#name-output");
const input = document.querySelector("input#name-input");
// console.log(span);
// console.log(input);

input.addEventListener("input", inputData);
function inputData(event) {
  span.textContent = event.currentTarget.value;
}
