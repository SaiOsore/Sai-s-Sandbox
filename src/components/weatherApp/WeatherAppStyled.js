import styled from 'styled-components';
import { get } from 'lodash';
import { 
  colorVariables, 
  sizeVariables, 
  device, 
  headerHeight, 
} from '../../theme/variables';

export const WeatherAppStyled = styled.div`
  width: 100%;
  min-height: calc(100vh - ${headerHeight});
  padding: 25px;
  display: flex;
  align-items: center;
`;

export const WeatherAppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;