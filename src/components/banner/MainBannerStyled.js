import styled from 'styled-components';
import { colorVariables, sizeVariables, device } from '../../theme/variables';

export const MainBannerStyled = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MainBannerHeader = styled.header`
  
`;

export const MainBannerHeaderWrapper = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1rem;
  transform: rotate(-25deg);
  ${device.tablet} {
    transform: rotate(0deg);
  }
`;

export const MainBannerSvgWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-column: 1 / 2;
`;

export const MainBannerRightCol = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  grid-column: 3 / 4;
`;

export const MainBannerVertical = styled.h2`
  writing-mode: vertical-lr;
  grid-column: 2 / 3;
  font-size: 4vw;
  text-align: right;
  letter-spacing: 2px;
`;

export const MainBannerSvg = styled.svg`
  width: 50vh;
  height: 50vh;
  & path:nth-child(1) {
    fill: ${colorVariables.primary};
  }
  & path:nth-child(2) {
    fill: ${colorVariables.dark};
  }
  ${device.tablet} {
    width: 20vh;
    height: 20vh;
  }
`;

export const MainBannerBoxSvg = styled.svg`
  width: 20vh;
  height: 20vh;
  ${device.tablet} {
    width: 10vh;
    height: 10vh;
  }
`;

export const MainBannerTitle = styled.h1`
  font-size: 10vw;
  margin-bottom: 1vh;
`;