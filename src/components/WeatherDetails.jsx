import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { iconUrlFromCode, formatToLocalTime } from "../services/weatherService";

function WeatherDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
        {/** Weather Description (i.e. Snow, Clouds, Rain, etc.) */}
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

        {/** Weather icon for right now */}
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src={iconUrlFromCode(icon)}
          alt=""
          className="w-20"
        />

        {/** Current temperature */}
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>

        {/** 'Feels like' temperature */}
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Feels Like:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>

            {/** Humidity */}
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity}%`}</span>
          </div>

            {/** Wind */}
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()}mph`}</span>
          </div>
        </div>
      </div>

        {/** Sunrise */}
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Sunrise:
          <span className="font-medium ml-1">{formatToLocalTime(sunrise, timezone, "HH:mm")}</span>
        </p>
        <p className="font-light">|</p>

        {/** Sunset */}
        <UilSunset />
        <p className="font-light">
          Sunset:
          <span className="font-medium ml-1">{formatToLocalTime(sunset, timezone, "HH:mm")}</span>
        </p>
        <p className="font-light">|</p>

        {/** Max Temp */}
        <UilArrowUp />
        <p className="font-light">
          High:
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>

        {/** Min Temp */}
        <UilArrowDown />
        <p className="font-light">
          Low:
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>
      </div>
    </div>
  );
}

export default WeatherDetails;
