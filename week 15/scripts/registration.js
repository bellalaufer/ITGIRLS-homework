let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input'),
    inputPassword = document.querySelector('.js-input-password'),
    inputPhone = document.querySelector('.js-input-phone'),
    inputCheckbox = document.querySelector('.js-input-checkbox'),
    inputName = document.querySelector('#name');


form.onsubmit = function () {
    let person = inputName.value;

    formInputs.forEach(function (input) {
        if (input.value == '') {
            input.classList.add('error');
            console.log('input not filled');
        } else {
            input.classList.remove('error');
        }
    });

    if (person == '') {
        alert("Введите данные, чтобы заргистрироваться");
    } else if (inputCheckbox.checked) {
        alert(`Здравствуйте, ${person}!`);
    }

    return false

}

function checkPass() {
    let pass1 = document.querySelector('#password');
    let pass2 = document.querySelector('#password-check');
    let message = document.querySelector('#error');
    let message2 = document.querySelector('#error-check');
    let goodColor = '#5BCE85';
    let badColor = '#C15770';

    if (pass1.value.length > 5) {
        message.style.backgroundColor = goodColor;
        message.innerHTML = "Хороший пароль!"
    } else {
        message.innerHTML = "Короткий пароль!";
        message.style.backgroundColor = badColor;
    };

    if (pass1.value == pass2.value) {
        message2.style.backgroundColor = goodColor;
        message2.innerHTML = "Верно!";
    } else if (pass1.value != pass2.value && pass2.value != '') {
        message2.innerHTML = "Неверно!";
        message2.style.backgroundColor = badColor;
    }
}
