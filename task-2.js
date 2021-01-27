const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const parent = document.querySelector('ul#ingredients');

const ingredientsList= ingredients.map(item => {
  const tag = document.createElement('li');
  tag.textContent = item;
  return tag
});
parent.append(...ingredientsList);