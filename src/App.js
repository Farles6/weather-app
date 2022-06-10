import './App.css';
import useData from './useData';


function App() {
 const {weather} = useData()
  // console.log(weather.data);

    const dailyData = weather.data.daily.map(info => {
      const icon = `http://openweathermap.org/img/wn/${info.weather[0].icon}.png`
      return <div>{info.dt}</div> 
      // info.dt
    })
    console.log(dailyData);
  return (
    <div className="App">
      {dailyData}
    </div>
  );
}

export default App;



// let unix_timestamp = response.data.current.dt;
// // Create a new JavaScript Date object based on the timestamp
// // multiplied by 1000 so that the argument is in milliseconds, not seconds.
// var date = new Date(unix_timestamp * 1000);
// // Hours part from the timestamp
// var hours = date.getHours();
// // Minutes part from the timestamp
// var minutes = "0" + date.getMinutes();
// // Seconds part from the timestamp
// var seconds = "0" + date.getSeconds();
// console.log('date',date);
// console.log('getdate',date.getDate());
// console.log('getday',date.getDay());
// console.log('getMonth',date.getMonth());

// // Will display time in 10:30:23 format
// var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

// console.log(formattedTime);