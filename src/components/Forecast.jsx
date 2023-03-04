import React from 'react'

function Forecast({ title }) {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>
                {title}
            </p>
        </div>
        <hr className='my-2' />

        <div className='flex flex-row items-center justify-between text-white'>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    16:00
                </p>
                <img 
                    src="http://openweathermap.org/img/wn/10d@2x.png" 
                    alt=""
                    className='w-12 my-1'
                />
                <p className='font-medium'>22°</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    17:00
                </p>
                <img 
                    src="http://openweathermap.org/img/wn/10d@2x.png" 
                    alt=""
                    className='w-12 my-1'
                />
                <p className='font-medium'>22°</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    18:00
                </p>
                <img 
                    src="http://openweathermap.org/img/wn/10d@2x.png" 
                    alt=""
                    className='w-12 my-1'
                />
                <p className='font-medium'>22°</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    19:00
                </p>
                <img 
                    src="http://openweathermap.org/img/wn/10d@2x.png" 
                    alt=""
                    className='w-12 my-1'
                />
                <p className='font-medium'>22°</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    20:00
                </p>
                <img 
                    src="http://openweathermap.org/img/wn/10d@2x.png" 
                    alt=""
                    className='w-12 my-1'
                />
                <p className='font-medium'>22°</p>
            </div>
        </div>

    </div>
  )
}

export default Forecast