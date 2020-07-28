import styled from 'styled-components';
import { colorVariables } from '../../theme/variables';

export const HomeStyled = styled.div`
  position: relative;
  height: 100vh;
`;

export const HomeWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colorVariables.primary};
  opacity: .5;
`;

export const GridPattern = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url(../img/home/grid.png);
  background-size: 105rem;
  z-index: -1;
`;