// Реализуйте класс `Валидатор`, который будет проверять строки. К примеру, у него будет метод `isEmail`, который параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод `isDomain` для проверки домена, метод `isDate` для проверки даты и метод `isPhone` для проверки телефона.
    
//     Сделайте 2 версии этого класса - стандартную и статическую.



class Validator {
    isEmail(input) {
        let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (input.match(pattern)) {
            return true;
        } else {
            console.log('Error!')
        }
    }
    isDomain(input) {
        let pattern = /^[a-zA-Z0-9][a-zA-Z0-9-_]{0,61}[a-zA-Z0-9]{0,1}\.([a-zA-Z]{1,6}|[a-zA-Z0-9-]{1,30}\.[a-zA-Z]{2,3})$/;
        if (input.match(pattern)) {
            return true;
        } else {
            console.log('Error!')
        }

    }
    isDate(input) {
        let pattern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        if (input.match(pattern)) {
            return true;
        } else {
            console.log('Error!')
        }

    }
    isPhone(input) {
        let pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        if (input.match(pattern)) {
            return true;
        } else {
            console.log('Error!')
        }

    }

}

let validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67')); 



class ValidatorStatic {
    static isEmail(input) {
        let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (input.match(pattern)) {
            return true;
        } else {
            console.log('Error!')
        }
    }


    static isDomain(input) {
        let pattern = /^[a-zA-Z0-9][a-zA-Z0-9-_]{0,61}[a-zA-Z0-9]{0,1}\.([a-zA-Z]{1,6}|[a-zA-Z0-9-]{1,30}\.[a-zA-Z]{2,3})$/;
        if (input.match(pattern)) {
            return true;
        } else {
            console.log('Error!')
        }

    }
    static isDate(input) {
        let pattern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        if (input.match(pattern)) {
            return true;
        } else {
            console.log('Error!')
        }

    }
    static isPhone(input) {
        let pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        if (input.match(pattern)) {
            return true;
        } else {
            console.log('Error!')
        }

    }
}
let validatorStatic = new ValidatorStatic();
console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));