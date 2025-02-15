
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){

    const [weatherInfo , setWeatherInfo] = useState( {
    city : "WonderLand",
    temp: 26.86,
    tempMax: 26.86,
    tempMin: 26.86,
    feelsLike: 25.94,
    humidity: 18,   
    weather: "clear sky"
    }
    );

    let updateInfo = (newinfo) =>{

        setWeatherInfo(newinfo);
    };


    return(

       <div style={{textAlign:"center"}}>
            <h2>Weather App</h2> 
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
    </div>
    );
}
