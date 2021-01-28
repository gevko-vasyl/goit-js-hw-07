const categotyList = document.querySelector('ul#categories').children;
console.log(`В списке ${categotyList.length} категории.`);


const categories = document.querySelectorAll(".item");
categories.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const list = item.querySelectorAll('ul li').length;
    console.log('Категория: ', title, '\nКоличество элементов: ', list);
});