import React from 'react'
import { UilSearch, UilMapMarker } from '@iconscout/react-unicons'
import { useState } from 'react';


function Inputs({ setQuery, units, setUnits }) {
    const [city, setCity] = useState("");

    const handleSearchClick = () => {
        if (city !== '') setQuery({q: city})
    }
    
    const handleSearchEnter = (event) => {
        if (city !== ''&& event.key === "Enter") {
            setQuery({q: city})
        }
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude

                setQuery({
                    lat,
                    lon,
                })
            })
        }
    }

    /** For changing from Celsius to Farenheight and vice-versa */
    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name
        if (units !== selectedUnit) {
            setUnits(selectedUnit);
        }
    }

  return (
    <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
            <input 
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
                onKeyDown={handleSearchEnter}
                type="text" 
                placeholder="Search for a place"
                className="text-xl font-light p-2 w-full shadow-xl focus:outline-non capitalize placeholder:capitalize"
            />
            <UilSearch 
                size={25} 
                className="text-white cursor-pointer transition ease-out hover:scale-125" 
                onClick={handleSearchClick}
            />
            <UilMapMarker 
                size={25} 
                className="text-white cursor-pointer transition ease-out hover:scale-125" 
                onClick={handleLocationClick}
            />
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center">
            <button 
                name="metric" 
                className="text-xl text-white font-light hover:scale-125 transition ease-out"
                onClick={handleUnitsChange}>
                    °C
            </button>
            <p className="text-xl text-white mx-1">|</p>
            <button 
                name="imperial" 
                className="text-xl text-white font-light hover:scale-125 transition ease-out"
                onClick={handleUnitsChange}>
                    °F
            </button>
        </div>
    </div>
    );
}

export default Inputs;