import styled from 'styled-components';
import { colorVariables } from '../../theme/variables';

export const DropdownStyled = styled.ul`
  display: ${(props) => props.display || 'block'};
  position: absolute;
  top: 150%;
  left: 0;
  width: 120px;
  background-color: ${colorVariables.light};
  border: 2px solid ${colorVariables.dark};
  box-shadow: ${colorVariables.shadow};
`;

export const DropdownItem = styled.li`
  &:hover {
    background-color: ${colorVariables.dark};
  }
  &:hover a {
    color: ${colorVariables.light};
  }
`;

export const DropdownLink = styled.a`
  padding: .5rem;
  display: block;
  color: ${colorVariables.dark};
`;