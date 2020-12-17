const categotyList = document.querySelector('ul#categories').children;
console.log(`В списке ${categotyList.length} категории.`);

const titles = document.querySelectorAll('h2');
const elements = document.querySelectorAll('.item>ul');

// for (let i = 0; i < titles.length; i+=1) {
//     const title = titles[i].textContent;
// };

// for (let i = 0; i < elements.length; i += 1){
//     const element = elements[i].children.length;
// }

// console.log(titles[0].textContent)
// console.log(elements[0].children.length)
console.log(`Категория: ${titles[0].textContent}\nКоличество элементов: ${elements[0].children.length}`);
console.log(`Категория: ${titles[1].textContent}\nКоличество элементов: ${elements[1].children.length}`);
console.log(`Категория: ${titles[2].textContent}\nКоличество элементов: ${elements[2].children.length}`);

