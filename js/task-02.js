const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const imgList = document.querySelector("ul#ingredients");
const makeLi = (el) => {
  const img = document.createElement("li");
  img.classList.add("item");
  img.textContent = el;
  console.log(img);
  return img;
};

const lis = ingredients.map(makeLi);
// console.log(makeLi);

console.log(lis);
imgList.append(...lis);
console.log(imgList);
