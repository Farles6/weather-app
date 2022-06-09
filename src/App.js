import './App.css';
import { React, useEffect, useState } from 'react';
import axios from 'axios';


function App() {
const [weather, setWeather] = useState()
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${process.env.REACT_APP_LAT}&lon=${process.env.REACT_APP_LONG}&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}`
   
    const getData = async () =>{
      const response = await axios.get(url);
      console.log(response.data);
      // setWeather(prev => {...prev, })
    }
    getData()
      }, [])
  //  console.log(weather);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
