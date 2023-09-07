// const API_KEY = '4ddbd8f50b6d34b97190c675f9a92705';
// const BASE_URL = "https://api.openweathermap.org/data/2.5"


// const getWeatherData = (infoType, searchParams)=> {

// const  url  = new URL(BASE_URL + "/" + infoType);
// url.search = new URLSearchParams({...searchParams, appid:API_KEY});
 


  
//     return fetch(url)
//     .then((res)=> res.json())
    
// };
// //destrucring array 
// const formattedCurrentWeather  = (data) => {
//     const  {
//         coord: {lat, lon},
//         main: {temp, feels_like, temp_min, temp_max,humidity},
//         name,
//         dt,
//         sys:{country, sunrise, sunset},
//         weather,
//         wind:{speed}
//     } = data

//     const {main: details, icon} = weather[0];
  
//    return {lat, lon, temp, feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset,details, icon,speed}
// };

// const getFormattedWeatherData = async (searchParams) => {

//     const formattedCurrentWeather = await  getWeatherData("weather",
//     searchParams)
//     .then(formattedCurrentWeather)

//     return formattedCurrentWeather;

// }


// export  default getFormattedWeatherData;

const API_KEY = '4ddbd8f50b6d34b97190c675f9a92705';
const BASE_URL = "https://api.openweathermap.org/data/2.5"


const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(`${BASE_URL}/${infoType}`);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  const response = await fetch(url);
  const data = await response.json();

  return data;
};

const formattedCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};


const formattedForecastWeather = (data) => {
    let {timezone, dialy, hourly} = data;
    
    dialy  = dialy.slice(1,6).map(d => {

        return{

            title : formatToLocalTime(d.dt,timezone,'ccc'),
            temp: d.temp.day, 
            icon:d.weather[0].icon
        }
    });


    dialy =  dialy.slice(1,6).map(d => {
        
        return{

            title:formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp.day,
            icon:d.weather[0].icon
        }

    });

    return {timezone, dialy, hourly};
}

const getFormattedWeatherData = async (searchParams) => {
  try {
    const data = await getWeatherData("weather", searchParams);
    const formattedData = formattedCurrentWeather(data);

    const {lat, lon} = formattedCurrentWeather

    const formattedForecastWeather = await getWeatherData('onecall',
    {
        lat, 
        lon,
         exclude: 'current, minutely,alerts',
         units:searchParams.units,
    })
    .then(formattedForecastWeather)

    return {...formattedCurrentWeather, ...formattedForecastWeather};
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
};



const formatToLocalTime  = (secs, zone,format = "ccc, dd LLL yyy' | Local time:' hh: mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

export default getFormattedWeatherData;
