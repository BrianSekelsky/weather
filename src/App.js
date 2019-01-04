import React, { Component } from 'react';
import './App.css';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';

class App extends Component {
  render() {
    return(
      <div>
        <button onClick={this.getWeather}>asdf</button>
      </div>
    );
  }

  getWeather = async (e) => {

	e.preventDefault();

	const Api_Key = 'b21f7a17099d9fdc3192295339c6c576';

	const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${Api_Key}`);
	const response = await api_call.json();
  
	console.log(response);
  
  }

}

export default App;
