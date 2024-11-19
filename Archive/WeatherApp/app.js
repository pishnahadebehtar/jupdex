import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import weatherCode from "../public/Archive/WeatherApp/weatherCode";
import {
  FaSun,
  FaSnowflake,
  FaCloudRain,
  FaCloud,
  FaWind,
} from "react-icons/fa";
function App() {
  const [search, SetSearch] = useState("");
  const [locations, SetLocations] = useState([]);
  const [choose, SetChoose] = useState();
  const [weather, SetWeather] = useState();
  const days = [...new Array(7)];
  async function LocationAPI() {
    try {
      const response = await fetch(
        `https://geocode.maps.co/search?q=${search}&api_key=667ccdf8a0b95707895202wmdcc0943`
      );
      const data = await response.json();
      if (data) SetLocations(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function WeatherAPI() {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${choose.lat}&longitude=${choose.lon}&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
      );
      const data = await response.json();
      if (data) SetWeather(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    if (choose) WeatherAPI();
  }, [choose]);
  const handleIcon = (code) => {
    let temp = weatherCode.filter((item) => {
      return item[0] === code;
    });
    switch (temp[0][2]) {
      case "FaSnowflake":
        return <FaSnowflake size={"8vw"} />;
        break;
      case "FaSun":
        return <FaSun size={"8vw"} />;
        break;
      case "FaCloudRain":
        return <FaCloudRain size={"8vw"} />;
        break;
      case "FaCloud":
        return <FaCloud size={"8vw"} />;
        break;
      case "FaWind":
        return <FaWind size={"8vw"} />;
        break;

      default:
        break;
    }
  };
  const handleWeather = (code) => {
    let temp = weatherCode.filter((item) => {
      return item[0] === code;
    });
    return temp[0][1];
  };
  return (
    <div className="App">
      <div className="title">Weather App</div>
      <div className="search">
        <input
          value={search}
          onChange={(e) => SetSearch(e.target.value)}
          placeholder="SEARCH LOCATION ... "
        />
        <button
          onClick={() => {
            LocationAPI();
            SetChoose();
          }}
        >
          SEARCH
        </button>
      </div>
      {locations.length != 0 && !choose ? (
        <div className="sug">
          CHOOSE BEST MATCH :
          {locations.map((item, index) => {
            return (
              <div key={index} className="box" onClick={() => SetChoose(item)}>
                <></>
                <>{item.display_name}</>
              </div>
            );
          })}
        </div>
      ) : null}
      {choose && weather ? (
        <div className="current">
          CURRENT WEATHER
          {handleIcon(weather.current.weather_code)}
          TEMP :{weather.current.temperature_2m}
          <span>&#8451;</span>
          {handleWeather(weather.current.weather_code)}
        </div>
      ) : null}

      <div className="week">
        {weather
          ? days.map((item, index) => {
              return (
                <div className="day">
                  {weather.daily.time[index]}
                  {handleIcon(weather.daily.weather_code[index])}
                  MaxTEMP :{weather.daily.temperature_2m_max[index]}
                  <span>&#8451;</span>
                  {handleWeather(weather.daily.weather_code[index])}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default App;
