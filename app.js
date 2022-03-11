const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '5a7d90518de74bb8f331b6136936aa30'
const input = document.getElementById('input');
const content = document.querySelector('.content');
const form = document.querySelector('form');

form.addEventListener('submit', (e) =>{
    let cityName = input.value;
    getResult(cityName);

    e.preventDefault();
});

const getResult = (cityName) =>{
    
    let apiValue = `${API_URL}weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=tr`
    console.log(apiValue)
    fetch(apiValue)
    .then(response => response.json())
    .then(data => {
        getData(data);
    })
}

function getData(data){
    let html = `
    <div class="city">${data.name}, ${data.sys.country}</div>
    <div class="temp">${Math.round(data.main.temp)}°C</div>
    <img class = "icon" src = "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></img>
    <div class="description">${data.weather[0].description}</div>
    <div class="minmax">${Math.round(data.main.temp_min)}°C / ${Math.round(data.main.temp_max)}°C</div>
    `

    content.innerHTML = html;

    input.value = '';
}
