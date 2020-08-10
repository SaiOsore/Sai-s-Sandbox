import styled, {css} from 'styled-components';
import Button from '../buttons/Button';
import { colorVariables, device } from '../../theme/variables';

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
  ${device.mobileL} {
    padding: 0 2rem;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  ${device.tablet} {
   justify-content: space-between;
  }
`;

export const HeaderNav = styled.nav`
  ${(props) => props.RightNav && css`
    ${device.tablet} {
      display: none;
    }
  `};
`;

export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
`;

export const HeaderItem = styled.li`
  position: relative;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
  ${device.mobileL} {
    margin-right: 5px;
  }
`;

export const HeaderLink = styled.a`
  color: ${colorVariables.dark};
`;

export const HeaderButton = styled(Button)`
  
`;

export const HeaderTime = styled.span`
  white-space: nowrap;
`;