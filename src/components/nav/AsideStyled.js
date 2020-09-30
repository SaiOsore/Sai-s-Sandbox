import styled from 'styled-components';
import { colorVariables } from '../../theme/variables';

export const AsideStyled = styled.aside`
  position: absolute;
  top: 50%;
  left: 0%;
  min-width: 10vh;
  background-color: ${colorVariables.light};
  border: 2px solid ${colorVariables.dark};
  transform: translateY(-50%);
`;

export const AsideNav = styled.nav`
  
`;

export const AsideList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AsideItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid ${colorVariables.dark};
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${colorVariables.dark};
  }
  &:hover a {
    color: ${colorVariables.light};
  }
`;

export const AsideLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 10vh;
  color: ${colorVariables.dark};
`;