const batmanBtn = document.querySelector('.batman');
const superhumanBtn = document.querySelector('.superman');
const ironmanBtn = document.querySelector('.ironman');
const spidermanBtn = document.querySelector('.spiderman');
const captainBtn = document.querySelector('.captain');
const thorBtn = document.querySelector('.thor');
const hulkBtn = document.querySelector('.hulk');
const wwomanBtn = document.querySelector('.wwoman');
const blackwidowBtn = document.querySelector('.blackwidow');
const deadpoolBtn = document.querySelector('.deadpool');

const info = document.querySelector('.info');







const superheroes = [{"name":"Batman", "universe":"DC Comics", "alias":"Bruce Wayne", "powers":"martial arts, intellect, dexterity","friends": "Robin, Batgirl"}, 
{"name":"Superman",  "universe":"DC Comics", "alias":"Clark Kent", "powers": "flying, superpowers, supervision", "friends": "Crypto"}, 
{"name": "Iron Man",  "universe":"Marvel Comics", "alias": "Tony Stark", "powers": "intellect, scientific knowledge, WWW", "friends": "Avengers"}, 
{"name": "Spider Man",  "universe":"Marvel Comics", "alias": "Piter Parker", "powers": "spider powers, superhuman instincts", "friends": "Avengers, X Men"}, 
{"name": "Captain America",  "universe":"Marvel Comics", "alias": "Stephen Rogers", "powers": "superpower, endurance, immortality, quick regeneration", "friends": "Avengers"}, 
{"name": "Thor",  "universe":"Marvel Comics", "alias": "Thor Odinsson", "powers": "god powers, Mjollnir", "friends": "Avengers"}, 
{"name": "Hulk",  "universe":"Marvel Comics", "alias": "Bruce Benner", "powers": "superhuman power and speed, endurance, flying", "friends": "Avengers"}, 
{"name": "Wonder Woman",  "universe":"DC Comics", "alias": "Diana Prince", "powers": "superhuman power and speed, endurance, flying", "friends": "Batman, Superman, Justice League"}, 
{"name": "Black Widow",  "universe":"Marvel Comics", "alias": "Natasha Romanoff", "powers": "excellent physical power, prolonged ageing, knowledge of many languages", "friends": "Avengers"}, 
{"name": "Deadpool",  "universe":"Marvel Comics", "alias": "Wade Wilson", "powers": "high pain threshold, regeneration and immortality, superhuman immune system", "friends": "Spiderman, Wolverine"}]



//const parsed = JSON.parse(superheroes)

//console.log(superheroes[0].name)

let showInfo = (superhero) => {
    for (superhero of superheroes) {
        info.innerHTML = `${superheroes.name}`
    }
    
}

batmanBtn.addEventListener('click', showInfo)
superhumanBtn.addEventListener('click', showInfo)