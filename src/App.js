import React, { useState } from 'react';

const api = {
  key:'123',
}

function App() {
  const [city, setCity] = useState('');
  const [weather,setWeather] = useState(''); 

  const serch = e =>{
    if(e.key === 'Enter' || e.onClick)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},{state}&appid=${api.key}`)
      .then(res => res.json()).then(data=>{
        console.log(data);
        setWeather(data);
        setCity('');
      })
  }
  function handleCkick(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},{state}&appid=${api.key}`)
      .then(res => res.json()).then(data=>{
        console.log(data);
        setWeather(data);
        setCity('');
      })
  }

  return (
    <div className="App">
      <div className = "input">
        <input 
          className = "inputCity"
          value = {city}
          onChange = {e=>setCity(e.target.value)}
          onKeyPress = {serch}
        ></input>
        <button className = "btn" onClick = {handleCkick}>Serch</button>
      </div>
      {(typeof weather.main != "undefined") ? (
      <div className = "weather">
      <div className = "country">{weather.name}</div>
      <div className ="temp">{Math.round(weather.main.temp)-273}°c</div>
      </div>
    ) : ('')}
    </div>
  );
}

export default App;
