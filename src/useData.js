import { React, useEffect, useState } from 'react';
import axios from 'axios'


const useData = () => {

  const [weather, setWeather] = useState({});
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${process.env.REACT_APP_LAT}&lon=${process.env.REACT_APP_LONG}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}`;
    
    const getData = async () => {
      const response = await axios.get(url);
      
      setWeather({data: response.data})
        
      
      };
      getData();
    }, []);

    return { weather }
  }
  export default useData