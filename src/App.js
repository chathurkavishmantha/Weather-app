import TopButtons from './components/TopButtons';
import "./App.css";
import WeatherDataInputs from './components/WeatherDataInputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import { getFormattedWeatherData } from './services/weatherSerices';
import { useEffect, useState } from 'react';


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
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
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
  );
}




export default App;
