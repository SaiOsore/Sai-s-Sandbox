import styled from 'styled-components';
import { 
  colorVariables, 
  headerHeight, 
  sizeVariables, 
  device, 
} from '../../theme/variables';
import { CountdownStyled } from '../../components/countdown/CountdownStyled';

export const BirthdaysStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colorVariables.primaryLight};
  min-height: calc(100vh - ${headerHeight});
  flex-direction: column;
  & ${CountdownStyled} {
    min-height: 27vh;
  }
`;

export const InfoContainer = styled.div`
  margin-bottom: 5vh;
`;

export const AvatarContainer = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border: 3px solid ${colorVariables.dark};
  border-radius: 50%;
  margin: 0 auto 1rem;
  background-color: ${colorVariables.primary};
  ${device.laptopL} {
    width: 130px;
    height: 130px;
  };
  ${device.tablet} {
    width: 100px;
    height: 100px;
  };
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  max-width: 100%;
`;

export const InfoText = styled.p`
  margin-bottom: 1rem;
  font-size: 3vh;
  font-weight: 700;
`;

export const InfoList = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  border: 2px solid ${colorVariables.dark};
  background-color: ${colorVariables.light};
`;

export const InfoItem = styled.li`
  display: flex;
  border-bottom: 2px solid ${colorVariables.dark};
  padding: 10px 5px;
  transition: 1s;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${colorVariables.secondary};
  }
  & p {
    margin-right: 10px;
  }
`;