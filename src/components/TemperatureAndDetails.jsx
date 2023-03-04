import React from 'react'
import {UilArrowUp,
        UilArrowDown,
        UilTemperature,
        UilTear,
        UilWind,
        UilSun,
        UilSunset,
} from "@iconscout/react-unicons"
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherSerices'

const TemperatureAndDetails = ({weather: 
    {
        details,
        icon,
        temp,
        temp_max,
        temp_min,
        sunrise,
        sunset,
        speed,
        humidity,
        feels_like,
        timezone
    }}) => {

  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300' >
            <p>{details}</p>
        </div>

        <div className='flex flex-row items-center justify-between text-white py-3  bg-[#2352aa60] rounded-xl px-2'>
            <img sizes='' className='w-20' src={iconUrlFromCode(icon)} alt="" />
            <p className='text-5xl'>{temp.toFixed()}°</p>
            <div className='flex flex-col space-y-2'>
                <div className="flex font-light text-sm items-center justify-center">
                    <UilTemperature size="18" className="mr-1 text-[#e8c6f8]"/>
                        Real Fell:
                        <span className='font-medium ml-1 italic'>{feels_like.toFixed()}°</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                    <UilTear size="18" className="mr-1 text-[#20e7f5]"/>
                        Humidity:
                        <span className='font-medium ml-1 italic'>{humidity.toFixed()}%</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                    <UilWind size="18" className="mr-1 text-[#17fa17]"/>
                        Wind:
                        <span className='font-medium ml-1 italic'>{speed.toFixed()} km/h</span>
                </div>
            </div>
        </div>


        <div className="flex flex-row items-center justify-center space-x-1 text-white text-sm py-3 mt-2 bg-[#2352aa60] rounded-xl">
            <UilSun className="text-[#f7ca37]" />
            <p className='font-light'>
                Raise:<span className='font-medium ml-1 italic'>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
            </p>
            <p className='font-light'>|</p>

            <UilSun className="text-[#f7ca37]" />
            <p className='font-light'>
                Set:<span className='font-medium ml-1 italic'>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
            </p>
            <p className='font-light'>|</p>

            <UilSun className="text-[#f7ca37]" />
            <p className='font-light'>
                High:<span className='font-medium ml-1 italic'>{temp_max.toFixed()} °C</span>
            </p>
            <p className='font-light'>|</p>

            <UilSun className="text-[#f7ca37]" />
            <p className='font-light'>
                Low:<span className='font-medium ml-1 italic'>{temp_min.toFixed()} °C</span>
            </p>

        </div>
      
    </div>
  )
}

export default TemperatureAndDetails
