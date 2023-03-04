import React from 'react'

function TopButtons({ setQuery }) {

    const cities = [
        {
            id: 1,
            title: 'London'
        },

        {
            id: 2,
            title: 'Tokyo'
        },

        {
            id: 3,
            title: 'Pamplona'
        },

        {
            id: 4,
            title: 'Berlin'
        },

        {
            id: 5,
            title: 'Zurich'
        },

        {
            id: 6,
            title: 'Vancouver'
        },

        {
            id: 7,
            title: 'Portland'
        }
    ];

    return <div className="flex items-center justify-around my-6">
        {cities.map((city) => (
            <button 
                key={city.id} 
                className="text-white text-base font-medium hover:scale-105 transition ease-out"
                onClick={() => setQuery({q: city.title})}>
                    {city.title}
            </button>
        ))}
    </div>;
};

export default TopButtons;