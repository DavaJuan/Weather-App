import React from 'react';
import './App.css';
import WeatherApp from './components/WeatherApp';
import FooterPage from './components/FooterPage';

const App = () => {
  return (
    <div>
      <WeatherApp />
      <FooterPage />
    </div>
  );
}

export default App;