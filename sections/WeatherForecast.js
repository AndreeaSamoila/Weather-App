// getForecast("Timisoara")
//     .then(data => {
//     console.log(data);
//
//

async function displayWeatherForecast(city) {
    const data = await getForecast(city);

const weatherForecastContainer = document.querySelector(".weather-forecast");
    weatherForecastContainer.innerHTML = '';
    const { list } = data;
    const forecastMap = {};
        list.forEach(element => {
            const {dt} = element;

            const day = getDayOfTheWeek(dt);

            if(forecastMap[day]) {
                forecastMap[day].push(element);
            } else {
                forecastMap[day] = [element];
            }
        });

    for( const key in forecastMap) {
        weatherForecastContainer.innerHTML += `<h3  class="text-primary">${key}</h3>`

     const forecast = forecastMap[key];
        forecast.forEach( forecastOne => {
            const {dt, main, weather} = forecastOne;

            const hour = getHour(dt);
            const temperature = Math.round(main.temp);
            const realFeel = Math.round(main.feels_like);
            const weatherDescription = weather[0].description;
            const weatherIcon = getWeatherIcon(weather[0].icon);

            weatherForecastContainer.innerHTML += `
            
            <div
                class="weather-forecast-box d-flex align-items-center border rounded p-3 mb-3 justify-content-between"
            >
                <p class="fs-4">${hour}</p>
                <div>
                    <img src="${weatherIcon}" />
                </div>
                <strong class="fs-4">${temperature}°C</strong>
                <p>${weatherDescription}</p>
                <p class="fs-5 real-feel">Feels like <strong>${realFeel}°C</strong></p>
            </div>
            `
        })
    }
}

