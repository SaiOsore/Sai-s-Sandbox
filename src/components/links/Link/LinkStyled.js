import styled, { css } from 'styled-components';
import { colorVariables, fontVariables } from '../../../theme/variables';
import { A } from 'hookrouter';
import { get } from 'lodash';

export const LinkStyled = styled(A)`
  display: inline-block;
  z-index: 100;
  line-height: 1;
  pointer-events: ${(props) => props.pointerEvents};
  color: ${(props) => get(colorVariables, props.color, colorVariables.white)};
  font-family: ${(props) => get(fontVariables, props.fontFamily, fontVariables.primary)};
  transition: color .3s, border .3s;

  ${(props) => props.border && css`
    &:hover, &:focus {
      border-bottom: 2px solid ${colorVariables.white};
    }
    &.active {
      border-bottom: 2px solid ${colorVariables.white};
    }
  `};
`;