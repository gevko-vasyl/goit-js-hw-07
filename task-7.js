const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
fontSizeControl.setAttribute('value', "")
fontSizeControl.setAttribute('min', "10")
fontSizeControl.setAttribute('max', "100")

fontSizeControl.addEventListener('input', fontSizeControl => {
    text.style.fontSize = `${fontSizeControl.target.value}px`;
});