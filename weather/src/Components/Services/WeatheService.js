const API_KEY = '4ddbd8f50b6d34b97190c675f9a92705';
const BASE_URL = "https://api.openweathermap.org/data/2.5"


const getWeatherData = (infoType, searchParams)=> {

const  url  = new URL(BASE_URL + "/" + infoType);
url.search = new URLSearchParams({...searchParams, appid:API_KEY});
 


     console.log(url);
    return fetch(url)
    .then((res)=> res.json())
    .then((data)=> data);
};


export default getWeatherData;