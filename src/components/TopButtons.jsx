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
    <div className='flex item-center justify-around bg-[#143959b9] rounded-lg lg:p-3
                    max-sm:flex max-sm:flex-wrap max-sm:my-0 '>
      {
        cities.map((city)=>(
            <button key={city.id} onClick={() =>setQuery({q: city.title})} className='text-white text-lg font-medium hover:text-black max-sm:text-sm'>{city.title}</button>
        ))
      }
    </div>
  )
}

export default TopButtons
