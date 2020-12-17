const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

function ingredientsAdder (array,parentElem) {
    array.forEach(item => {
        const tag = document.createElement('li');
        tag.textContent = item;
        parentElem.appendChild(tag)
    }) 
}

const parent = document.querySelector('ul#ingredients');

ingredientsAdder(ingredients, parent);