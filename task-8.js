const numberRef = document.querySelector('input');
const renderRef = document.querySelector('button[data-action="render"]');
const destroyRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
let amount;

number.addEventListener('input', valueListener)
render.addEventListener('click', createBoxes)
destroy.addEventListener('click', destroyBoxes)

function valueListener() {
  amount = number.target.value  
}

function destroyBoxes() {
    amount = 0;
};

function createBoxes(amount) {
    for (let i = 0; i < amount; i += 1){
        let width = '30px';
        let height = '30px'
        let boxes = [];
        const box = document.createElement('div');
        boxes.push(box);
        boxesRef.appendChild(...boxes);
        box.setAttribute
    }
}

