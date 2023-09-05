import React from 'react'
import {
    
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";


const TemperatureAndDetails = () => {
  return (
    <div>
    <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
     <p>Mzee</p>
    </div>
    
    <div className='flex flex-row  items-center justify-between  py-3'>
        <img src='https://clipart-library.com/newimages/clipart-png-36.' className='w-20' />
        <p className='text-5xl text-white'>40°</p>
        <div className='flex flex-col space-y-2'>

            <div className='flex font-light text-sm items-center justify-center text-white'>
              <UilTemperature size={18}  className="mr-1 "/>
              Real fell:
              <span className='font-medium ml-1'>35°</span>
            </div>

            <div className='flex font-light text-sm items-center justify-center text-white'>
              <UilWind size={18}  className="mr-1 "/>
              Wind:
              <span className='font-medium ml-1'>50%</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center text-white'>
              <UilTear size={18}  className="mr-1 "/>
              Humidity:
              <span className='font-medium ml-1'>12 km/h</span>
            </div>


        </div>
    </div>


    <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3' >
        <UilSun/>
        <p className='font-ligth'>Rise:<span className='font-medium ml-1'>06:00AM</span></p>
        <p className='font-light'>|</p>

        <UilSunset/>
        <p className='font-ligth'>Fall:<span className='font-medium ml-1'>06:30PM</span></p>
        <p className='font-light'>|</p>
        <UilSun/>
        <p className='font-ligth'>High:<span className='font-medium ml-1'>50°</span></p>
        <p className='font-light'>|</p>

        <UilSun/>
        <p className='font-ligth'>Low:<span className='font-medium ml-1'>40°</span></p>
    
    </div>
    </div>
  ) 
}
 
export default TemperatureAndDetails