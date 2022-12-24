// Помните наше практическое задание с опросником для владельцев котиков? Он нам снова пригодится! Напишите класс Cat со свойствами, соответствующими полям вашего опросника (например, кличка, корм и пр.), и по нажатию на кнопку "Ок" создайте экземпляр этого класса, заполнив его свойства ответами из опросника. В этом классе будут только свойства и конструктор, без методов. Выведите результат (заполненный объект класса Cat) в консоль при помощи console.log.

const btn = document.querySelector('.button');
let nickname = document.querySelector('.nickname');
let type = document.querySelector('.type');
let food = document.querySelectorAll('.food');
let sex = document.querySelector('.sex');
let comment = document.querySelector('.comment');



function createPet() {   

class Pet {    
    constructor (nickname, type, food, sex, comment) {
        this.nickname = nickname;
        this.type = type;

        let arr = []
        for (let fooditem of food) {              
            if (fooditem.checked) {
                arr.push(fooditem.value)                
                this.food = arr.join(', ')               
            }   
               
        }
        this.sex = sex;
        this.comment = comment;
       
    }   

}
let pet = new Pet(nickname.value, type.value, food, sex.value, comment.value)
console.log(pet)
}



btn.addEventListener('click', createPet)