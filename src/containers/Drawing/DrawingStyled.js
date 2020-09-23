import styled from 'styled-components';
import { colorVariables } from '../../theme/variables';

export const DrawingStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  background-color: pink;
  min-height: 100vh;
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
`;

const ButtonStyled = {
  width: '50px',
  height: '50px',
  border: `1px solid ${colorVariables.dark}`,
  margin: '10px',
  padding: '0',
}

export const Button = styled.button`
  ${ButtonStyled};
  & svg {
    width: 30px;
    height: 30px;
  }
`;

export const ColorInput = styled.input`
  ${ButtonStyled};
`;