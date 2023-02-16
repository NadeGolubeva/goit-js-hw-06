// Обработка отправки формы form.login - form должна быть
// по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть

// незаполненные поля, выводи alert с
// предупреждением о том, что все поля должны быть заполнены.

// Если пользователь заполнил все поля и отправил форму,

//     собери значения полей в обьект, где имя поля будет
//     именем свойства, а значение поля - значением свойства.
//     Для доступа к элементам формы используй свойство
// elements.
// Выведи обьект с введенными данными в консоль и очисти
// значения полей формы методом reset.

const form = document.querySelector(".login-form");
const email = document.querySelector("input[type=email]");
const password = document.querySelector("input[type=password]");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  // console.log(form);

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "") {
    alert("Все поля должны быть заполнены!!!");
  } else if (password.value === "") {
    alert("Все поля должны быть заполнены!!!");
  } else {
    console.log(email.value, password.value);
  }
  form.reset();
  console.log(email, password);
}
// const formData = new FormData(event.currentTarget);
// formData.forEach((value, name) => {
//   if (value === "") {
//     alert("Все поля должны быть заполнены!!!");
//   } else {
//     let data = [];
//     //   console.log(elements);
//     console.log("onFormSubmit -> name", name);
//     console.log("onFormSubmit -> value", value);
//     data.push(name, value);
//     console.log(data);
//   }
//   form.reset();
// });
// }
