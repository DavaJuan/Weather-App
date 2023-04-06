import React from 'react';
import '../Styles/WeatherMainInfo.css';

const WeatherMainInfo = ({weather}) => {
  return (
    <div className='mainInfoContainer'>
      <div className='mainInfoCountry'>{weather?.location.country}</div>
      <div className='mainInfoName'>{weather?.location.name}</div>
      <div>
        <img 
          src={`http:${weather?.current.condition.icon}`} 
          width='128' 
          alt={weather?.current.condition.text}
          className='mainInfoImg' 
          />
      </div>
      <div className='conditionAndTemp'>
        <div className='mainTemAndCond'>{weather?.current.condition.text}</div>
        <div className='mainTemAndCond'>{weather?.current.temp_c}°</div>
      </div>
      <div>
      <iframe 
        className='mainMap'
        title='mapa'
        src= {`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4535.8261523677575!2d${weather?.location.lon}7!3d${weather?.location.lat}63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1680791987382!5m2!1ses!2sar`}
        width="200" 
        height="200" 
        style={{border:0}} 
        // allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default WeatherMainInfo;