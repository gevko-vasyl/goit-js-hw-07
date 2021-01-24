const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const parent = document.querySelector('ul#ingredients');

ingredients.forEach(item => {
  const tag = document.createElement('li');
  tag.textContent = item;
  parent.appendChild(tag);
});