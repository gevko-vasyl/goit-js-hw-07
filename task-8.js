const numberRef = document.querySelector('input');
const renderRef = document.querySelector('button[data-action="render"]');
const destroyRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
let defaultSize = 30;

renderRef.addEventListener('click', valueListener)
destroyRef.addEventListener('click', destroyBoxes)

function valueListener() {
    const amount = Number(numberRef.value)
    createBoxes(amount);
}

function destroyBoxes() {
    let amount = Number(numberRef.value);
    amount = 0;

    while (boxesRef.firstChild) {
        boxesRef.removeChild(boxesRef.firstChild);
    }
    numberRef.value = 0;
};

function createBoxes(amount) {
    const boxes = [];
    for (let i = 0; i < amount; i += 1){
        const box = document.createElement('div');

        let width = defaultSize + 10 * i;
        box.style.width = `${width}px`;
        let height = defaultSize + 10 * i;
        box.style.height = `${height}px`;
        
        function random_rgba() {
        const o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
        }
        const color = random_rgba();
        box.style.backgroundColor = color;

        boxes.push(box);
        
    }

    boxesRef.append(...boxes);
    console.log(boxes);
}

