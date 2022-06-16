import './App.css';
import WeatherSevenDay from './WeatherSevenDay';
import useData from './useData';


function App() {
 const {weather, button} = useData()
 console.log('weather', weather);
  
 return (
    <div className="App">
      <div className='button'>
      {weather.button === 'Loading' && <button onClick={button}>Weekly Weather</button>}
      </div>
      <div>
       
      {weather.button === 'Pressed' &&<div>
       <strong>Current Weather for Fergus, Ontario {Math.round(weather.data.current.temp)}<span>&#176;C</span></strong>
       <WeatherSevenDay weather={weather} /></div>}
      </div>
    </div>
  );
}

export default App;