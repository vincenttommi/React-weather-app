
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './Components/TopButtons';
import Inputs from './Components/Inputs';
import TimeAndLocation from './Components/TimeAndLocation';
import TemperatureAndDetails from './Components/TemperatureAndDetails';
import Forecast from './Components/Forecast';
import getFormattedWeatherData from './Components/Services/WeatheService';

function App() {

const fetchWeather = async () => {
  const data  = await getFormattedWeatherData({ q: "Dubai"});
  console.log(data);
};

fetchWeather();

  return (
  <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-r from-cyan-700 to-blue-700 h-fit shadow-xl  '>


    <TopButtons/>
    <Inputs/> 

    
    <TimeAndLocation/>    
    <TemperatureAndDetails/>
    <Forecast  title="hourlyforecast"/>
    <Forecast  title="Daily forecast"/>

  </div>
  );
}

export default App;
