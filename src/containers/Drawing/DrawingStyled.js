import styled from 'styled-components';
import { colorVariables, device, headerHeight } from '../../theme/variables';

export const DrawingStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  background-color: pink;
  min-height: calc(100vh - ${headerHeight});
`;

export const Canvas = styled.canvas`
  border: 2px solid ${colorVariables.dark};
  margin-top: 10px;
  background-color: ${colorVariables.light};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

/*buttons and inputs main styles*/
const ButtonStyled = {
  width: '50px',
  height: '50px',
  border: `1px solid ${colorVariables.dark}`,
  margin: '10px',
  padding: '0',
}

const ButtonStyledMini = {
  width: '35px',
  height: '35px',
}

export const Button = styled.button`
  ${ButtonStyled};
  & svg {
    width: 30px;
    height: 30px;
  }
  ${device.mobileL} {
    ${ButtonStyledMini};
  }
`;

export const ColorInput = styled.input`
  ${ButtonStyled};
  ${device.mobileL} {
    ${ButtonStyledMini};
  }
`;