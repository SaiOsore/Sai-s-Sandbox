import { createGlobalStyle } from 'styled-components';
import optimize from '../theme/optimize';
import fonts from '../theme/fonts';
import { fontVariables, sizeVariables, colorVariables, } from '../theme/variables';

export const GlobalStyle = createGlobalStyle`
  ${optimize};
  ${fonts};

  body {
    display: flex;
    flex-direction: column;
    color: ${colorVariables.black_50};
    font-size: ${sizeVariables.m.size};
    letter-spacing: ${sizeVariables.m.spacing};
    font-family: ${fontVariables.primary};
    overflow-x: hidden;
  }
`;
