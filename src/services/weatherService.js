const API_KEY = 'c4c4fad23b0100b1fd6b76616f52f1d1'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

/* API key from OpenWeatherMap */ 

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    /* Prints URL */
    console.log(url);
    
    return fetch(url)
        .then((res) => res.json())
        .then((data) => data);
};

export default getWeatherData;