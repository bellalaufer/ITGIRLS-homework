fetch('http://www.boredapi.com/api/activity/')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const div = document.querySelector('div')
        div.innerHTML = data.activity
    })
    .catch(error => console.log(error))


    fetch('https://api.github.com/users/bellalaufer')
    .then(response => response.json())
    .then(data => {
        console.log(data)})