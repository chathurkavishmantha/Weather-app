import TopButtons from './components/TopButtons';
import "./App.css";
import WeatherDataInputs from './components/WeatherDataInputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import { getFormattedWeatherData } from './services/weatherSerices';
import { useEffect, useState } from 'react';
import {cloud} from '../src/img/cloud.jpg';


function App() {

  const [query, setQuery] = useState({q:"colombo"});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () =>{
      await getFormattedWeatherData({...query, units}).then((data)=>{
        console.log(`this is fetch data`, data);  
        setWeather(data);      
      });      
    }

    fetchWeather();

  },[query, units]);


  return (
    <div className="h-[100vh]  bg-cloud-img bg-no-repeat bg-cover shadow-xl lg:py-2 shadow-gray-400
                    max-sm:bg-cover max-sm:w-full max-sm:px-2 max-sm:pt-5 max-sm:h-[100vh]">
      <div className='lg:h-[98vh] lg:mx-auto max-w-screen-lg lg:px-20 lg:py-10 lg:backdrop-brightness-50 rounded
                      '>
      <TopButtons setQuery={setQuery} />
      <WeatherDataInputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast items={weather.hourly} title="hourly forecast" />
          <Forecast items={weather.daily} title="daily forecast" />
        </div>
      )}
      </div>
      
    </div>
  );
}




export default App;
