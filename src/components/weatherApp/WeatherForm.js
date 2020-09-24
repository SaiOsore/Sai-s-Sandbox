import React from "react";
import styled from 'styled-components';
import { 
  colorVariables, 
  device, 
} from '../../theme/variables';

const Form = styled.form`
  margin-bottom: 60px;
  ${device.tablet} {
    margin-bottom: 30px;
  }
`;

const Input = styled.input`
  margin-right: 10px;
  border: 1px solid ${colorVariables.dark};
  padding: 10px;
  border-radius: 10px;
  ${device.mobileL} {
    margin-bottom: 15px;
    width: 100%;
    max-width: 400px;
  }
`;

const Button = styled.button`
  border: 1px solid ${colorVariables.dark};
  padding: 10px;
  background: ${colorVariables.secondary};
  ${device.mobileL} {
    display: block;
    width: 100%;
    max-width: 400px;
  }
`;

const WeatherForm = (props) => (
  <Form onSubmit={props.getWeather}>
    <Input type="text" name="city" placeholder="City"/>
    <Button type="submit">Get the weather</Button>
  </Form>
);

export default WeatherForm;