import styled from 'styled-components';
import { 
  colorVariables, 
  headerHeight, 
  device, 
} from '../../theme/variables';

export const CountdownStyled = styled.div`
  display: flex;
`;

export const CountdownBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 5vw;
`;

export const CountdownNum = styled.p`
  font-size: 10vw;
  ${device.tablet} {
    font-size: 14vw;
  };
`;

export const CountdownText = styled.span`
  font-size: 2vw;
  ${device.tablet} {
    font-size: 4vw;
  };
`;