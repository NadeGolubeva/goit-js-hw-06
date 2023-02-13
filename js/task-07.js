const rangeSize = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");
const textWord = text.textContent;

rangeSize.addEventListener("input", onSizeRange);
function onSizeRange(event) {
  const textSize = event.currentTarget.value;
  text.style.fontSize = `${textSize}px`;
  //   console.log(event.currentTarget.value);
  //   console.log(text.style.fontSize);
  //   console.log(text.textContent);
}
