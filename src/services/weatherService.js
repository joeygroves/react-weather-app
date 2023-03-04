const API_KEY = 'c4c4fad23b0100b1fd6b76616f52f1d1'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

/* API key from OpenWeatherMap */ 

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    return fetch(url)
        .then((res) => res.json())
};

const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    /* Dealing with 'weather' array endpoint from array. 
    * Renaming 'main' to 'details
    */
    const {main: details, icon} = weather[0]

    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed}
}; 

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams)
        .then(data => formatCurrentWeather(data))
    return formattedCurrentWeather
};

export default getFormattedWeatherData;