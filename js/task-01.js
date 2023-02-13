const makeSumCategories = () => {
  const liHead = document.querySelectorAll("li.item");
  const heads = document.querySelectorAll("h2");

  console.log(`Number of categories: ${liHead.length}`);

  heads.forEach((el) => {
    const littleList = el.nextElementSibling;
    console.log(`Category: ${el.textContent} 
    Elements: ${littleList.children.length}`);
  });
};

console.log(makeSumCategories());
