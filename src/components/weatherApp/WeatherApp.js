import React, { Component } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMarkup from "./WeatherMarkup";
import { 
  WeatherAppStyled, 
  WeatherAppContainer, 
} from './WeatherAppStyled';

const API_KEY = "eeee499645fd41ffc268649b9037e4f2";

class WeatherApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      temp: undefined,
      city: undefined,
      country: undefined,
      sunrise: undefined,
      sunset: undefined,
      icon: undefined,
      description: undefined,
      type: undefined,
      error: undefined
    };
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if(city) {
      const cityUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      fetch(cityUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        const sunrise = data.sys.sunrise;
        let setSunriseDate = new Date(sunrise * 1000);
        const sunriseDate = setSunriseDate.toLocaleTimeString();

        const sunset = data.sys.sunset;
        let setSunsetDate = new Date(sunset * 1000);
        const sunsetDate =  setSunsetDate.toLocaleTimeString();

        const cityIcon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

        this.setState({
          data: data,
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          sunrise: sunriseDate,
          sunset: sunsetDate,
          icon: cityIcon,
          description: data.weather[0].description,
          type: data.weather[0].main,
          error: undefined
        })
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: 'This city is not in the list.'
        })
      })
    }
  }

  render() {

    const { 
      temp, 
      city, 
      country, 
      sunrise, 
      sunset, 
      description, 
      icon, 
      type, 
      error, 
    } = this.state;

    const color = () => {
      switch(type) {
        case 'Clouds' :
          return '#4e4e4e';
        case 'Clear' :
          return '#6984e8';
        case 'Rain' :
          return '#24293f';
        default :
          return;
      }
    }

/*    let color;

    if(type === 'Clouds') {
      color = 'grey';
    }*/

    return (
      <WeatherAppStyled>
        <WeatherAppContainer>
          <WeatherForm getWeather={this.getWeather}/>
          <WeatherMarkup
            temp={temp}
            city={city}
            country={country}
            sunrise={sunrise}
            sunset={sunset}
            icon={icon}
            description={description}
            type={type}
            error={error}
            color={color}
          />
        </WeatherAppContainer>
      </WeatherAppStyled>
    );
  }

}

export default WeatherApp;