const weather = document.querySelector(".js-weather");

const API_KEY = "53e5f6702afd333ef72c51eb845ebf7a";
const COORDS = "coords";

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function (response) {
        return response.json();
    }).then(function (json) {
        const temparature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temparature} @ ${place}`;
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("cant get location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedcoords = localStorage.getItem(COORDS);
    if (loadedcoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedcoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();
