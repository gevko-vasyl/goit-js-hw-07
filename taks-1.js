const categotyList = document.querySelector('ul#categories').children;
console.log(`В списке ${categotyList.length} категории.`);


categotyList.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const list = item.querySelectorAll('ul li').length;
    console.log('Категория: ', title, '\nКоличество элементов: ', list);
});

