const API_KEY = "630b69219b242e90753ca5ed3392f110";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;

    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}`;
    });
}

function onGeoError() {
    alert("Cant not find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);