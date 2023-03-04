import React from 'react'

const TopButtons = ({setQuery}) => {
    const cities = [
        {
            id:1,
            title:"Colombo"
        },
        {
            id:2,
            title:"Tokyo"
        },
        {
            id:3,
            title:"New york"
        },
        {
            id:4,
            title:"London"
        },
        {
          id:5,
          title:"Paris"
      },
    ];
    
  return (
    <div className='flex item-center justify-around my-6 bg-[#2352aa60] rounded-lg p-2'>
      {
        cities.map((city)=>(
            <button key={city.id} onClick={() =>setQuery({q: city.title})} className='text-white text-lg font-medium'>{city.title}</button>
        ))
      }
    </div>
  )
}

export default TopButtons
