function windToKmPerHour (meterPerSec) {
    return meterPerSec * 3.6;
}

function getWeatherIcon(iconCode) {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`
}

