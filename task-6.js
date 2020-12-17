const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('change', event => {
    if (event.target.value.length === 6) {
        validationInput.classList.add('valid')
        validationInput.classList.remove('invalid')
        
    } else {
        validationInput.classList.add('invalid')
        validationInput.classList.remove('valid')
        
    }
})
