import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}){

    const INIT_URL ="https://media.istockphoto.com/id/856939024/photo/cracked-earth-soil-sunset-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=YVBo2vZ_sd2SZiaNTP8Kh6eFp0D887vqT_TeOS9KrPw=";

    // let info = {
    // city : "Pune",
    // temp: 26.86,
    // tempMax: 26.86,
    // tempMin: 26.86,
    // feelsLike: 25.94,
    // humidity: 18,   
    // weather: "clear sky"
    // };

    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SE9UJTIwV2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q09MRCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1438449805896-28a666819a20?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";



    return(
        <div className="InfoBox"> 
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity > 80 ? RAIN_URL : (info.temp > 15) ? HOT_URL :COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        { info.humidity > 80 ? <ThunderstormIcon/>: (info.temp > 15) ? <WbSunnyIcon/> :<AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <div className="weather-details">
  <p><span>Temperature:</span> {info.temp}°C</p>  
  <p><span>Humidity:</span> {info.humidity}%</p>  

  <p><span>Max Temp:</span> {info.tempMax}°C</p>  
  <p><span>Min Temp:</span> {info.tempMin}°C</p>  

  <p><span>Feels Like:</span> {info.feelsLike}°C</p>  
  <p><span>Description:</span> <i>{info.weather}</i></p>  
</div>

</Typography>
      </CardContent>
      
    </Card>
        </div>
</div>
    )

}

