import { DateTime } from "luxon";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "1fa9ff4126d95b8db54f3897a208e91c";

// const makeIconURL = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getWeatherData = async (infoType, searchParams) => {
    // console.log(`infortype:`,infoType, ` `,  `searchParams:`,searchParams );
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY})

    // console.log(url);

    return fetch(url)
    .then((response)=> response.json())
    // .then((data)=> data);
};
const formatCurrentWeather = (data) =>{
    const{
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind:{speed}

    } = data;

    const {main: details, icon} = weather[0];

    return{
        lat,
        lon,
        temp,
        feels_like,
        temp_max,
        temp_min,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed        
    }
}

export const formatForecastWeather = (data) => {
    let {timezone, daily, hourly} = data;

    daily = daily.slice(1,6).map((d)=> {
        return{
            title: formatToLocalTime(d.dt, timezone,"ccc"),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }    
    });

    hourly = hourly.slice(1,6).map((d) => {
        return{
            title: formatToLocalTime(d.dt, timezone,'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon
        }    
    });

    return { timezone, daily, hourly };
};

export const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData("weather",searchParams).then(formatCurrentWeather);
  
    const { lat, lon } = formattedCurrentWeather;
  
    const formattedForecastWeather = await getWeatherData("onecall", {
      lat,
      lon,
      exclude: "current,minutely,alerts",
      units: searchParams.units,
    }).then(formatForecastWeather);
  
    return { ...formattedCurrentWeather, ...formattedForecastWeather };
  };

export const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);


export const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;



// export const getWeatherDataLatitudeAndLongitude = async (latitude, logitude, units) => {
//   console.log(`lat val`,latitude, ` `, `long val`,logitude);
//   const URL = `${REACT_APP_API_URL2}&lat=${latitude}&lon=${logitude}&appid=${API_KEY}&units=${units}`;

//   const data = await fetch(URL)
//   .then((response) => response.json())
//   .then((data) => data);

//   const {
//     weather,
//     main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
//     wind: { speed },
//     sys: { country },
//     name,
//   } = data;

//   const { description, icon } = weather[0];

//   return {
//     description,
//     iconURL: makeIconURL(icon),
//     temp,
//     feels_like,
//     temp_min,
//     temp_max,
//     pressure,
//     humidity,
//     speed,
//     country,
//     name,
//   };
// }

// export { getWeatherData };
