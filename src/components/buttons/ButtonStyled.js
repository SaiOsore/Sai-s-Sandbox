import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { colorVariables, sizeVariables, fontVariables, device } from '../../theme/variables';

export const ButtonStyled = styled.button`
  background: none;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => get(colorVariables, props.color, colorVariables.white)};
  font-family: ${(props) => get(fontVariables, props.fontFamily, fontVariables.primary)};
  transition: color .3s, border .3s;

  ${(props) => props.MainBtn && css`
    color: ${(props) => get(colorVariables, props.color, colorVariables.black)};
    &:hover, &:focus, &.active {
      color: ${(props) => get(colorVariables, props.color, colorVariables.accent)};
    }
  `};

  ${(props) => props.BorderBtn && css`
    &:hover, &:focus {
      border-bottom: 2px solid ${colorVariables.white};
    }
    &.active {
      border-bottom: 2px solid ${colorVariables.white};
    }
  `};
`;

export default ButtonStyled;