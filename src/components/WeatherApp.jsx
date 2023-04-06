import React, { useState,useEffect } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMainInfo from './WeatherMainInfo';
import '../Styles/WeatherApp.css';

const WeatherApp = () => {

  const [weather,setWeather] = useState(null);
  
  const apiKey = '1ef57e8201b14499817130936230604';
  const apiUrl = 'http://api.weatherapi.com/v1/current.json?aqi=no';

  useEffect(()=>{
   loadInfo(); 
  }, []);

  useEffect(()=>{
     document.title = `Weather | ${weather?.location.country ?? ''}`
   }, [weather]);

  async function loadInfo(city = 'london'){
    try {
      const request = await fetch(
        `${apiUrl}&key=${apiKey}&q=${city}`);

      const json = await request.json();

      // console.log(json);

      setWeather(json);
    } catch (error) {
      console.log('hubo un error');
    }
  }

  const handleChangeCity = (city) =>{
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className='AppContainer'>
      <WeatherForm onChangeCity={handleChangeCity}/>
      <WeatherMainInfo weather={weather}/>
    </div>
  );
}

export default WeatherApp;