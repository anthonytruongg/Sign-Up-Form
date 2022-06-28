const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const createAccount = document.querySelector('button')
createAccount.addEventListener('click', validatePassword);

const errorMessage = document.querySelector('.error')


function validatePassword() {
    console.log("clicking button")
    if (password.value !== confirmPassword.value) {
        password.style.borderRadius = '5px';
        password.style.borderColor = 'red';
        confirmPassword.style.borderRadius = '5px';
        confirmPassword.style.borderColor = 'red';

        errorMessage.style.display = 'contents'
    } else if(password.value === confirmPassword.value) {
        password.style.borderRadius = '5px';
        password.style.borderColor = 'green';
        confirmPassword.style.borderRadius = '5px';
        confirmPassword.style.borderColor = 'green';

        errorMessage.style.display = 'none'
    }
    else {
        password.style.borderRadius = '5px';
        password.style.borderColor = 'black';
        confirmPassword.style.borderRadius = '5px';
        confirmPassword.style.borderColor = 'black';

        errorMessage.style.display = 'none'
    }
}

