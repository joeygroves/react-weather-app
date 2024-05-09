import { DateTime } from "luxon";

/* API key from OpenWeatherMap */ 
const API_KEY = process.env.REACT_APP_API;
const BASE_URL = process.env.REACT_APP_BASE_URL;


/**
 * 
 * @param {*} infoType 
 * @param {*} searchParams 
 * @returns 
 * 
 * Gets weather data from OpenWeatherMap API 
 * 
 */
const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    return fetch(url).then((res) => res.json())
};


/**
 * 
 * @param {*} data 
 * @returns 
 * 
 * Extracts actual data from API
 * 
 */
const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data

    /* Dealing with 'weather' array endpoint from array. 
    * Renaming 'main' to 'details
    */
    const { main: details, icon } = weather[0]

    return {
        lat, 
        lon, 
        temp, 
        feels_like, 
        temp_min, 
        temp_max, 
        humidity, 
        name, 
        dt, 
        country, 
        sunrise, 
        sunset, 
        details, 
        icon, 
        speed,
    };
}; 

/**
 * This function formats the data for 'Weekly' and 'Daily' forecasts
 * and gets it ready for 'getFormattedWeatherData' function
 */
const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;

    /**
     * For 'Weekly' (7 Day) Forecast
     */
    daily = daily.slice(1,8).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, "ccc"),
            temp: d.temp.day,
            icon: d.weather[0].icon
        };
    });

    /**
     * For Hourly Forecast (Up to 6 hours ahead)
     */
    hourly = hourly.slice(1,7).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, "HH:mm ZZZZ"),
            temp: d.temp,
            icon: d.weather[0].icon
        }
    });

    return {timezone, daily, hourly};

};



/**
 * Function gets formatted weather data which is ready to be used in our app
 */
const getFormattedWeatherData = async (searchParams) => {

    /**
     * For current weather using the 'weather' URL endpoint
     */
    const formattedCurrentWeather = await getWeatherData(
        "weather", 
        searchParams
        ).then(formatCurrentWeather);


    const { lat, lon } = formattedCurrentWeather;


    /**
     * For forecast weather using the 'onecall' URL endpoint
     */
    const formattedForecastWeather = await getWeatherData(
        "onecall", 
        {
            lat,
            lon, 
            exclude: "current,minutely,alerts", 
            units: searchParams.units,
        }).then(formatForecastWeather);

    console.log(lat, lon, searchParams);

    return {...formattedCurrentWeather, ...formattedForecastWeather};
};

/**
 * Uses 'luxon JS' package to handle formatting of date and time
 */
const formatToLocalTime = (
    secs, 
    zone, 
    format = "cccc, dd LLL yyyy' | Local time 'HH:mm ZZZZ"
    ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };