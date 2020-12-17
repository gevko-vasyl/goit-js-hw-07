const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener('input',updateName);

function updateName(nameInput) {
    if (nameInput.target.value !== '') {
        nameOutput.textContent = nameInput.target.value;        
    } else {
        nameOutput.textContent = 'незнакомец';      
    }  
}
