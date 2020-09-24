import React from "react";
import { 
  WeatherMarkupStyled, 
  WeatherMarkupBackground, 
  WeatherMarkupContainer, 
  WeatherMarkupCard, 
  WeatherMarkupText,
  WeatherMarkupIcon, 
} from './WeatherMarkupStyled';

const WeatherMarkup = (props) => (
  <WeatherMarkupStyled>
    { props.city && !props.error &&
      <>
        <WeatherMarkupBackground 
          backgroundColor={props.color}
        />
        <WeatherMarkupContainer>
          <WeatherMarkupCard textAlign='left'>
            <WeatherMarkupIcon src={props.icon} alt={'weather icon'} />
          </WeatherMarkupCard>
          <WeatherMarkupCard>
            <WeatherMarkupText>City: {props.city}, {props.country}</WeatherMarkupText>
          </WeatherMarkupCard>
          <WeatherMarkupCard>
            <WeatherMarkupText>Temperature: {props.temp}</WeatherMarkupText>
          </WeatherMarkupCard>
          <WeatherMarkupCard>
            <WeatherMarkupText>Description: {props.description}</WeatherMarkupText>
          </WeatherMarkupCard>
          <WeatherMarkupCard>
            <WeatherMarkupText>Sunrise: {props.sunrise}</WeatherMarkupText>
          </WeatherMarkupCard>
          <WeatherMarkupCard>
            <WeatherMarkupText>Sunset: {props.sunset}</WeatherMarkupText>
          </WeatherMarkupCard>
        </WeatherMarkupContainer>
      </>
    }
    { props.error &&
      <WeatherMarkupText color="alert">{props.error}</WeatherMarkupText>
    }
  </WeatherMarkupStyled>
)

export default WeatherMarkup;
