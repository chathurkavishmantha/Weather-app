import React, { useState } from 'react'
import {UilSearch, UilLocationPoint} from "@iconscout/react-unicons";


const WeatherDataInputs = ({setQuery, units, setUnits}) => {
  const [city, setCity] = useState("Colombo");

  const handleSearchClick = () => {
    if(city !== '') {
       setQuery({q: city})
    } 
    else 
    {
      return "somthing wrong with city values";
    }
  }

  const handleLocationClick = () => {
    if(navigator.geolocation !== '') {
       navigator.geolocation.getCurrentPosition((position) =>{
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({lat, lon});
        
       })
    } 
    else 
    {
      return "somthing wrong with city values";
    }
  }


  return (
    <div className='flex flex-row justify-center my-6 bg-[#2352aa60] p-2'>
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input 
              type="text" 
              className='text-md font-light p-2 w-fll shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-3xl text-center' 
              placeholder='Search of city'
              onChange={(e)=>setCity(e.currentTarget.value)}
        />
        <UilSearch 
          size={25}  
          className="text-white cursor-pointer transtiion ease-out hover:scale-125  hover:text-[#00fa4b]"
          onClick={handleSearchClick}
          />

        <UilLocationPoint 
          size={25} 
          className="text-white cursor-pointer transtiion ease-out hover:scale-125  hover:text-[#c97af9]"
          onClick={handleLocationClick} 
          />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button className='text-xl text-white font-light hover:scale-125 hover:text-[#d6f72e]' name='metric'>°C</button>
        <p className='text-sm text-white mx-2' >|</p>
        <button className='text-xl text-white font-light hover:scale-125 hover:text-[#ef2af2]' name='imperial'>°F</button>
      </div>
    </div>
  )
}

export default WeatherDataInputs
