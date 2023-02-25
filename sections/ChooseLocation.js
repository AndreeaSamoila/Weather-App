const timisoara = document.querySelector(".dropdown-item.timisoara");
const ploiesti = document.querySelector(".dropdown-item.ploiesti");
const bucuresti = document.querySelector(".dropdown-item.bucuresti");
const gorj = document.querySelector(".dropdown-item.gorj");
const cluj = document.querySelector(".dropdown-item.cluj");
const sibiu = document.querySelector(".dropdown-item.sibiu");
const brasov = document.querySelector(".dropdown-item.brasov");

function updateCurrentCity(city) {
    const currentCityElement = document.querySelector(".current-city");
    currentCityElement.innerHTML = city;
}

function updateWeather (city) {
    localStorage.setItem("city", city);
    updateCurrentCity(city);
    displayCurrentWeather(city);
}

timisoara.addEventListener("click", function() {
    updateWeather("Timisoara");
})
ploiesti.addEventListener("click", function() {
    updateWeather("Ploiesti");
})
bucuresti.addEventListener("click", function() {
    updateWeather("București");
})

gorj.addEventListener("click", function() {
    updateWeather("Gorj");
})

cluj.addEventListener("click", function() {
    updateWeather("Cluj");
})

sibiu.addEventListener("click", function() {
    updateWeather("Sibiu");
})


brasov.addEventListener("click", function() {
    updateWeather("Brasov");
})
