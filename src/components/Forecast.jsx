import React from 'react'
import { iconUrlFromCode } from '../services/weatherSerices'

const Forecast = ({items, title}) => {
  return (
    <div className='py-1'>
      <div className="flex items-center justify-start my-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row bg-[#14395978] p-1 items-center rounded  justify-between text-white">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light lg:text-sm max-sm:text-[11px]">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-14 my-1"
              alt=""
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast
