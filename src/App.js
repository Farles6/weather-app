import './App.css';
import WeatherSevenDay from './WeatherSevenDay';
import useData from './useData';


function App() {
 const {weather, button} = useData()
 console.log('weather', weather);
  
 return (
    <div className="App">
      {weather.button === 'Loading' && <button onClick={button}>Weekly Weather</button>}
      {weather.button === 'Pressed' &&<WeatherSevenDay weather={weather} />}
    </div>
  );
}

export default App;