let counterValue = 0;

const count = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener("click", onDecrClick);
incrementBtn.addEventListener("click", onIncrClick);

function onDecrClick(event) {
  counterValue -= 1;
  count.textContent = counterValue;
}
function onIncrClick(event) {
  counterValue += 1;
  count.textContent = counterValue;
}
