import './App.css';
import React,{ useState, useEffect } from 'react';

function App() {

const [city, setCity] = useState('');

  const APIKEYS = 'd8af15ca1efb730722498a215f9abab6';

  useEffect(() => {

  })

  function fetchWeather (city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='
    + city 
    + '&lang=it&units=metric&appid=' 
    + APIKEYS)
    .then((response) => response.json())
    .then((data) => displayWeather(data))
  }

  function displayWeather (data) {
    const {name} = data;
    const {description, icon} = data.weather[0];
    const {temp} = data.main;
    document.querySelector('.response').innerHTML =  name + description + icon + temp;
}

  return (
    <div className="App">
       <div className="card">
        <div className="search">
            <input type="text" 
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => (e.code == 'Enter' && fetchWeather(city))}/>
            <button type='submit' onClick={() => fetchWeather(city)}>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
        </div>
        <div className="response"></div>
    </div>
    </div>
  );
}

export default App;
