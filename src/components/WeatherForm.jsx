import React, { useState } from 'react';
import '../Styles/WeatherForm.css';

const WeatherForm = ({onChangeCity}) => {

  const [city,setCity] = useState('');

  const handleChange = (e) =>{
    const value = e.target.value;

    if(value !== ''){
      setCity(value);
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    onChangeCity(city);
  }


  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder='Search a City...' 
        type="text" 
        onChange={handleChange}
        className='FormInput'
        />
    </form>
  );
}

export default WeatherForm;