const input = document.querySelector("input");
console.log(input);
input.addEventListener("blur", onInput);
function onInput(event) {
  //   console.log(event.currentTarget.value);
  //   console.log(event.currentTarget.value.length);
  //   console.log(input.dataset);

  if (event.currentTarget.value.length === 6) {
    // console.log("ok");
    input.classList.add("valid");
  } else {
    // console.log("ne ok");
    input.classList.add("invalid");
  }
}
