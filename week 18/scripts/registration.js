// Доработать форму регистрации из прошлых заданий, сделав для нее валидацию через JS.


const form = document.querySelector('.js-form'),
    inputs = document.querySelectorAll('.js-input');   
    inputCheckbox = document.querySelector('.js-input-checkbox'),
    inputName = document.querySelector('#name');    
    
    login = document.querySelector('.js-input-login');
    password = document.querySelector('.js-input-password');
    phone = document.querySelector('.js-input-phone');

    messagePass = document.querySelector('.message-pass');
    messageLog = document.querySelector('.message-login');
    messagePhone = document.querySelector('.message-phone');

    errorLog = document.querySelector('.error-login');
    errorPhone = document.querySelector('.error-phone');
    errorPass = document.querySelector('.error-pass');
    errorCheck = document.querySelector('.error-empty');


    submitBTN = document.querySelector('.submit-btn');

    const validateLogin = () => {        
        let pattern = /^[a-z0-9_-]{3,16}$/;
        if (login.value.match(pattern)) {
            return true;
            errorLog.innerHTML = '';
        } else {
            errorLog.innerHTML = "Логин введен неправильно";
            return false;
        } 
            
    } 

    const validatePhone = () => {
        let pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        if (phone.value.match(pattern)) {
            errorPhone.innerHTML = '';
            return true;
        } else
        
        {
            errorPhone.innerHTML = "Неправильный формат телефона";
            messagePhone.innerHTML = '';
            return false;
        }
    }

    const validatePassword = () => {
        let pattern = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
        if (password.value.match(pattern)) {
            messagePass.innerHTML = "Хороший пароль!"; 
            errorPass.innerHTML = '';
            return true;           
        } else {
            errorPass.innerHTML = "Слабый пароль! Используйте заглавные буквы и спецсимволы";
            return false;
            
        }
        
    };

    const validateCheckbox = () => {
        if (inputCheckbox.checked) {
            errorCheck.innerHTML = '';
            return true;
            
        } else {
            errorCheck.innerHTML = 'Вы не согласились с условиями';
            
        }
    }

    const refreshInputs = () => {
        for (input of inputs) {
            if (input.value === false) {
                inputs[i].value === '';                
            } else {
                return true;
            }
        }
        }
        
    
    submitBTN.addEventListener('click', validateLogin);        
    submitBTN.addEventListener('click', validatePhone);
    submitBTN.addEventListener('click', validatePassword);
    submitBTN.addEventListener('click', validateCheckbox);
    submitBTN.addEventListener('click', function handleClick(event) {
        event.preventDefault();   
    });
    submitBTN.addEventListener('click', refreshInputs);



  
/* Код для задания недели 15*/

// form.onsubmit = function () {
//     let person = inputName.value;

//     formInputs.forEach(function (input) {
//         if (input.value == '') {
//             input.classList.add('error');
//             console.log('input not filled');
//         } else {
//             input.classList.remove('error');
//         }
//     });

//     if (person == '') {
//         alert("Введите данные, чтобы заргистрироваться");
//     } else if (inputCheckbox.checked) {
//         alert(`Здравствуйте, ${person}!`);
//     }

//     return false

// }

// function checkPass() {
//     let pass1 = document.querySelector('#password');
//     let pass2 = document.querySelector('#password-check');
//     let message = document.querySelector('#error');
//     let message2 = document.querySelector('#error-check');
//     let goodColor = '#5BCE85';
//     let badColor = '#C15770';

//     if (pass1.value.length > 6) {
//         messagePass.style.backgroundColor = goodColor;
//         messagePass.innerHTML = "Хороший пароль!";
//         errorPass.innerHTML = '';
//     } else {
//         errorPass.innerHTML = "Короткий пароль!";
//         errorPass.style.backgroundColor = badColor;
//     };

//     if (pass1.value == pass2.value) {
//         message2.style.backgroundColor = goodColor;
//         message2.innerHTML = "Верно!";
//     } else if (pass1.value != pass2.value && pass2.value != '') {
//         message2.innerHTML = "Неверно!";
//         message2.style.backgroundColor = badColor;
//     }
// }




