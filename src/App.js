import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import WeatherDetails from './components/WeatherDetails';
import Forecast from './components/Forecast';
import getWeatherData from './services/weatherService';

function App() {

  /* Testing weatherService.js */
  const fetchWeather = async () => {
    const data = await getWeatherData("weather", { q: 'london' });
    console.log(data);
  };

  fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 
    h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <WeatherDetails />
      <Forecast title="hourly forecast"/>
      <Forecast title="weekly forecast"/>
    </div>
  );
}

export default App;