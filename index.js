const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl =>
    new bootstrap.Popover(popoverTriggerEl))

let currentCity = localStorage.getItem("city");
console.log("Current City")

if(!currentCity) {
    localStorage.setItem("city", "Arad");
    currentCity = "Arad"
}

updateCurrentCity(currentCity);
displayCurrentWeather(currentCity);