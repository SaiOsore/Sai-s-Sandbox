import styled from 'styled-components';
import Button from '../buttons/Button';
import { colorVariables } from '../../theme/variables';

export const HeaderStyled = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: ${colorVariables.secondary};
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  border-bottom: 2px solid ${colorVariables.dark};
`;

export const HeaderLeft = styled.div`
  display: flex;
`;

export const Logo = styled.div`
  margin-right: 2rem;
`;

export const HeaderNav = styled.nav`

`;

export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
`;

export const HeaderItem = styled.li`
  position: relative;
  margin-right: 2rem;
  &:last-child {
    margin-right: 0;
  }
`;

export const HeaderLink = styled.a`
  color: ${colorVariables.dark};
`;

export const HeaderButton = styled(Button)`
  
`;

export const HeaderTime = styled.span`
  
`;