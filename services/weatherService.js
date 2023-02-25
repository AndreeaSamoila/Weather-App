const API_KEY  = "6cc2cbbe076a9b595f4d3d63afe7877e";
//the api key should not be visible;

const URL = "https://api.openweathermap.org/data/2.5";

const DEFAULT_QUERY_PARAMETERS  = `lang=ro&units=metric&appid=${API_KEY}`;

function getCurrentWeather(city) {
    return fetchAndParse(`${URL}/weather?q=${city}&${DEFAULT_QUERY_PARAMETERS}`)
}