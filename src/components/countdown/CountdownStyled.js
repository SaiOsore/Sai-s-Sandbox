import styled from 'styled-components';
import { 
  colorVariables, 
  headerHeight, 
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
`;

export const CountdownText = styled.span`
  font-size: 2vw;
`;