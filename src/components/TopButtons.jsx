import React from 'react'

function TopButtons() {

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
    ]

    return <div className="flex items-center justify-center my-6">
        {cities.map((city) => (
            <button className="text-white text-lg font-medium">{city.title}</button>
        ))}
    </div>;
}

export default TopButtons;