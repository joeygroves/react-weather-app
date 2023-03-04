import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons"

function WeatherDetails() {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>Cloudy</p>
        </div>

        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img 
                src="http://openweathermap.org/img/wn/10d@2x.png" 
                alt=""
                className='w-20'
            />
            <p className='text-5xl'> 17°</p>


            <div className='flex flex-col space-y-2'>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className="mr-1"/>
                    Feels Like:
                    <span className='font-medium ml-1'>19°</span>
                </div>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={18} className="mr-1"/>
                    Humidity:
                    <span className='font-medium ml-1'>73%</span>
                </div>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className="mr-1"/>
                    Wind:
                    <span className='font-medium ml-1'>8 mph</span>
                </div>
            
            </div>
        </div>

    <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
        <UilSun />
        <p className='font-light'>
            Sunrise: 
            <span className='font-medium ml-1'>
                7:45
            </span>
        </p>
    </div>

    </div>
  )
}

export default WeatherDetails