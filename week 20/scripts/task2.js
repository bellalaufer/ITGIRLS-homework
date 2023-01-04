
//NASA API

fetch('https://api.nasa.gov/planetary/apod?api_key=erULuJtWJ5McB14h09Ph0tbVaa256YhlPq0ItIXf')
    .then(response => response.json())
    .then(data => {
        console.log(data.url)
        const img = document.querySelector('img')
        img.src = data.url
        const div = document.querySelector('div')
        div.innerHTML = data.explanation

    }   
     )
    .catch(error => console.log(error))

// WEATHER

    fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a996fa29a1447257a44f100457fa6123')
    .then(response => response.json())
    .then(data => {
        console.log(data.weather[0].main)
        // const img = document.querySelector('img')
        // img.src = data.url
        const div = document.querySelector('.weather')
        div.innerHTML = data.weather[0].main

    }   
     )
    .catch(error => console.log(error))


    


    
