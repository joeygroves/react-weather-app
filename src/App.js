import React, { useEffect, useState } from "react";
import './App.css';
//import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import WeatherDetails from './components/WeatherDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';

function App() {

  /**
   * Using React useState Hooks to set defaults for location, units and weather
   */
  const [query, setQuery] = useState({q: 'sydney'});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);


  /**
   * Using React useEffect Hooks.
   * Use effect hook grabs data on the first load anyway...
   * So, we want to fetch new weather data when either of the 2 things happens:
   * When query changes, when there's a new location
   * And when unit changes, which farenheit or celsius
   */
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query, units})
        .then((data) => {
          setWeather(data);
        });

    };

    fetchWeather();
  },  [query, units]);


  /**
   * For changing the background colour depending on the temperature
   */
  const formatBackground = () => {
    if (!weather) {
      return 'from-cyan-700 to-blue-700'
    };

    const threshold = units === 'metric' ? 20 : 60;

    if (weather.temp <= threshold) {
      return 'from-cyan-700 to-blue-700'
    };

    return 'from-yellow-700 to-orange-700'
  }

  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 h-fit shadow-xl shadow-gray-400 
        bg-gradient-to-r ${formatBackground()}`}>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

      {/**
       * This means if weather exists (is not null), then we'll load all the components below
       */}
      {weather && (
        <div>
          {/**
          * We want the following 4 components below to load, IF we have the weather
          */}
          <TimeAndLocation weather={weather}/>
          <WeatherDetails weather={weather}/>

          <Forecast title="hourly forecast" items={weather.hourly}/>
          <Forecast title="7-day forecast" items={weather.daily}/>
        </div>
      )}

    </div>
  );
}

export default App;