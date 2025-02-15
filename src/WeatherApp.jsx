

import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "WonderLand",
        temp: 26.86,
        tempMax: 26.86,
        tempMin: 26.86,
        feelsLike: 25.94,
        humidity: 18,
        weather: "clear sky"
    });

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    };

    return (
        <div className="weather-app">
            <div className="app-container">
                <h1 className="app-title">☀️ Weather App ⛅</h1>
                <SearchBox updateInfo={updateInfo} />
                <InfoBox info={weatherInfo} />
            </div>
        </div>
    );
}
