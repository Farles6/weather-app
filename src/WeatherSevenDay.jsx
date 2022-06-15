import moment from "moment";
import './WeatherSevenDay.css'
const d2d = require('degrees-to-direction')

const hardData = [
  {
      "dt": 1654880400,
      "sunrise": 1654853014,
      "sunset": 1654910317,
      "moonrise": 1654893780,
      "moonset": 1654844700,
      "moon_phase": 0.35,
      "temp": {
          "day": 18.59,
          "min": 8.3,
          "max": 19.9,
          "night": 10.2,
          "eve": 16.75,
          "morn": 9.44
      },
      "feels_like": {
          "day": 17.5,
          "night": 9.65,
          "eve": 15.92,
          "morn": 7.81
      },
      "pressure": 1006,
      "humidity": 38,
      "dew_point": 4.01,
      "wind_speed": 4.5,
      "wind_deg": 279,
      "wind_gust": 10.71,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
          }
      ],
      "clouds": 30,
      "pop": 0.8,
      "rain": 0.59,
      "uvi": 5.1
  },
  {
      "dt": 1654966800,
      "sunrise": 1654939399,
      "sunset": 1654996754,
      "moonrise": 1654985100,
      "moonset": 1654932300,
      "moon_phase": 0.39,
      "temp": {
          "day": 20.69,
          "min": 7.63,
          "max": 21.2,
          "night": 13.23,
          "eve": 18.01,
          "morn": 9.57
      },
      "feels_like": {
          "day": 19.7,
          "night": 12.75,
          "eve": 17.41,
          "morn": 9.57
      },
      "pressure": 1008,
      "humidity": 34,
      "dew_point": 4.38,
      "wind_speed": 3.13,
      "wind_deg": 194,
      "wind_gust": 10.08,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
          }
      ],
      "clouds": 24,
      "pop": 0.62,
      "rain": 0.11,
      "uvi": 6.72
  },
  {
      "dt": 1655053200,
      "sunrise": 1655025787,
      "sunset": 1655083189,
      "moonrise": 1655076660,
      "moonset": 1655020140,
      "moon_phase": 0.43,
      "temp": {
          "day": 13.57,
          "min": 10.73,
          "max": 16.15,
          "night": 11.52,
          "eve": 13.75,
          "morn": 11.51
      },
      "feels_like": {
          "day": 13.05,
          "night": 10.95,
          "eve": 13.19,
          "morn": 11.3
      },
      "pressure": 1005,
      "humidity": 79,
      "dew_point": 9.9,
      "wind_speed": 5.68,
      "wind_deg": 301,
      "wind_gust": 11.36,
      "weather": [
          {
              "id": 501,
              "main": "Rain",
              "description": "moderate rain",
              "icon": "10d"
          }
      ],
      "clouds": 94,
      "pop": 1,
      "rain": 10.81,
      "uvi": 0.69
  },
  {
      "dt": 1655139600,
      "sunrise": 1655112178,
      "sunset": 1655169622,
      "moonrise": 1655168220,
      "moonset": 1655108460,
      "moon_phase": 0.47,
      "temp": {
          "day": 22.45,
          "min": 11.06,
          "max": 22.97,
          "night": 14.23,
          "eve": 19.12,
          "morn": 11.38
      },
      "feels_like": {
          "day": 21.72,
          "night": 13.59,
          "eve": 18.52,
          "morn": 10.74
      },
      "pressure": 1012,
      "humidity": 37,
      "dew_point": 7.17,
      "wind_speed": 5.12,
      "wind_deg": 330,
      "wind_gust": 11.85,
      "weather": [
          {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02d"
          }
      ],
      "clouds": 17,
      "pop": 0.1,
      "uvi": 7.05
  },
  {
      "dt": 1655226000,
      "sunrise": 1655198571,
      "sunset": 1655256053,
      "moonrise": 1655259300,
      "moonset": 1655197500,
      "moon_phase": 0.5,
      "temp": {
          "day": 25.29,
          "min": 9.67,
          "max": 25.54,
          "night": 15.19,
          "eve": 20.67,
          "morn": 14.53
      },
      "feels_like": {
          "day": 24.92,
          "night": 15.06,
          "eve": 20.54,
          "morn": 13.92
      },
      "pressure": 1016,
      "humidity": 40,
      "dew_point": 10.74,
      "wind_speed": 2.74,
      "wind_deg": 117,
      "wind_gust": 9.78,
      "weather": [
          {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
          }
      ],
      "clouds": 66,
      "pop": 0,
      "uvi": 1.1
  },
  {
      "dt": 1655312400,
      "sunrise": 1655284967,
      "sunset": 1655342481,
      "moonrise": 1655349600,
      "moonset": 1655287380,
      "moon_phase": 0.55,
      "temp": {
          "day": 27.5,
          "min": 12.55,
          "max": 27.5,
          "night": 21.12,
          "eve": 21.91,
          "morn": 17.34
      },
      "feels_like": {
          "day": 27.76,
          "night": 21.69,
          "eve": 22.45,
          "morn": 17.22
      },
      "pressure": 1012,
      "humidity": 48,
      "dew_point": 15.32,
      "wind_speed": 6.31,
      "wind_deg": 189,
      "wind_gust": 15.61,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
          }
      ],
      "clouds": 58,
      "pop": 0.83,
      "rain": 5.66,
      "uvi": 2
  },
  {
      "dt": 1655398800,
      "sunrise": 1655371366,
      "sunset": 1655428907,
      "moonrise": 0,
      "moonset": 1655378220,
      "moon_phase": 0.59,
      "temp": {
          "day": 27.07,
          "min": 16.76,
          "max": 27.07,
          "night": 16.76,
          "eve": 21.17,
          "morn": 21.85
      },
      "feels_like": {
          "day": 26.67,
          "night": 16.21,
          "eve": 20.7,
          "morn": 22.21
      },
      "pressure": 1003,
      "humidity": 35,
      "dew_point": 10.34,
      "wind_speed": 6.81,
      "wind_deg": 269,
      "wind_gust": 18.62,
      "weather": [
          {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
          }
      ],
      "clouds": 28,
      "pop": 0.13,
      "uvi": 2
  },
  {
      "dt": 1655485200,
      "sunrise": 1655457766,
      "sunset": 1655515330,
      "moonrise": 1655438880,
      "moonset": 1655469540,
      "moon_phase": 0.62,
      "temp": {
          "day": 19.97,
          "min": 11.13,
          "max": 22.29,
          "night": 12.71,
          "eve": 19.32,
          "morn": 11.77
      },
      "feels_like": {
          "day": 19.2,
          "night": 12.54,
          "eve": 18.59,
          "morn": 11.3
      },
      "pressure": 1008,
      "humidity": 45,
      "dew_point": 7.54,
      "wind_speed": 7.12,
      "wind_deg": 312,
      "wind_gust": 15.58,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
          }
      ],
      "clouds": 91,
      "pop": 0.93,
      "rain": 2.91,
      "uvi": 2
  }
]

export default function WeatherSevenDay(props) {
 const { weather } = props
 console.log('props', props);
  console.log(weather);
  // weather.data.daily
  
  const dailyData = weather.data.daily.filter((info, i) => i < 7).map((info, i) => {
    const date = new Date(info.dt * 1000)
    const icon = `http://openweathermap.org/img/wn/${info.weather[0].icon}.png`
    return <div className="weekly-data-single" key={i}>
      <div>{moment.unix(info.dt).format('dddd')}</div> 
      <div>{`${date.getMonth()}/${date.getDate()}`}</div>
      <div>{info.weather[0].description}</div>
      <img src={icon}/>
      <div>{Math.round(info.temp.day)}</div>
      <div>feels like:  {Math.round(info.feels_like.day)}</div>
      <div>night:  {Math.round(info.temp.night)}</div>
      <div>POP: {info.pop * 100}%</div>
      <div>wind(km/h): {`${Math.round(info.wind_speed)} ${d2d(info.wind_deg)}`}</div>
    </div>
  })

  return (
    <div className="weekly-data">
      {weather && dailyData}
    </div>
  )
}