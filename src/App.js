import './App.css';
import { React, useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${process.env.REACT_APP_LAT}&lon=${process.env.REACT_APP_LONG}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}`;

    const getData = async () => {
      const response = await axios.get(url);
      console.log(response.data);
      
      setWeather(prev => {
        return {...prev, data: response.data}})
    };
    getData();
  }, []);
   console.log('weather', weather);
  return (
    <div className="App">

    </div>
  );
}

export default App;


// let unix_timestamp = response.data.current.dt;
//       // Create a new JavaScript Date object based on the timestamp
//       // multiplied by 1000 so that the argument is in milliseconds, not seconds.
//       var date = new Date(unix_timestamp * 1000);
//       // Hours part from the timestamp
//       var hours = date.getHours();
//       // Minutes part from the timestamp
//       var minutes = "0" + date.getMinutes();
//       // Seconds part from the timestamp
//       var seconds = "0" + date.getSeconds();
//       console.log(date);

//       // Will display time in 10:30:23 format
//       var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

//       console.log(formattedTime);