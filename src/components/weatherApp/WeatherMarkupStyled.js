import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { colorVariables, sizeVariables, device } from '../../theme/variables';

export const WeatherMarkupStyled = styled.div`
  width: 350px;
  min-height: 400px;
  background-color: ${colorVariables.secondary};
  border-radius: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  position: relative;
  ${device.mobileL} {
    width: 100%;
    max-width: 300px;
    min-height: 320px;
  }
`;

export const WeatherMarkupBackground = styled.div`
  background-color: ${(props) => (props.backgroundColor)};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15%;
`;

export const WeatherMarkupContainer = styled.div`
  width: 100%;
  z-index: 1;
`;

export const WeatherMarkupCard = styled.div`
  margin-bottom: 15px;
  text-align: ${(props) => (props.textAlign)};
`;

export const WeatherMarkupText = styled.p`
  color: ${(props) => get(colorVariables, props.color)};
  font-size: ${sizeVariables.xxl.size};
  @media screen and ${device.mobileL} {
    font-size: ${sizeVariables.m.size};
  }
  ${(props) => props.Dark && css`
    color: ${colorVariables.dark};
  `}
  ${(props) => props.Accent && css`
    color: ${colorVariables.primary};
  `};
`;

export const WeatherMarkupIcon = styled.img`
  
`;