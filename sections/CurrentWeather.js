async function displayCurrentWeather (city) {
    const currentWeatherData = await getCurrentWeather(city);

    const {main, dt, weather, wind} = currentWeatherData;

    const temperature = Math.round(main.temp);
    const realFeel  =  Math.round(main.feels_like);

    const day = getDayOfTheWeek(dt);
    const hour  = getHour(dt);

    const weatherDescription = weather[0].description;
    const weatherIcon = weather[0].icon;

    const windSpeed = Math.round(wind.speed);
}