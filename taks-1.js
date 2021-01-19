const categotyList = [...document.querySelector('ul#categories').children];
console.log(`В списке ${categotyList.length} категории.`);


categotyList.map(item => {
    const title = item.querySelector('h2');
    const list = item.querySelectorAll('ul li');
    return {
        title: title.textContent,
        list: list.length
    }
}).forEach(entry => {
    console.log('Категория: ', entry.title, '\nКоличество элементов: ', entry.list);
});

