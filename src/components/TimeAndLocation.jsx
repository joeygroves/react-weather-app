import React from 'react'

function TimeAndLocation() {
    // Uses 'luxon' to handle JavaScript date and time objects
  return (
    <div>
        <div className="flex items-center justify-center my-6">
            <p className='text-white text-xl font-extralight'>
                Saturday, 4 March 2023 | Local time: 7:24
            </p>
        </div>

        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>
                Sapporo, JP
            </p>
        </div>
    </div>
  );
}

export default TimeAndLocation