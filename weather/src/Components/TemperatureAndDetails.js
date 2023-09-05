import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    uilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons"
const TemperatureAndDetails = () => {
  return (
    <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
           <p>Cloudy</p>





     <div className='flex flex-row  items-center text-white py-3'>
        <img src='' className='w-20'/>
        <p className='text-5xl'>40°</p>
        <div className='flex flex-row space-y-2'>
            <div className='flex font-light text-sm items-center justify-center'>
               <UilTemperature size={18} className="mr-1"/>
               Real fell:
               <span className='font-medium ml-1'>45°</span>
            </div>
        </div>
    </div>      
    </div>
  )
}

export default TemperatureAndDetails