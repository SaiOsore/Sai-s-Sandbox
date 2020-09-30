import styled from 'styled-components';
import { 
  colorVariables, 
  headerHeight, 
  device, 
} from '../../theme/variables';

export const AboutStyled = styled.div`
  padding: 50px 15px;
`;

export const AboutAvatarContainer = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  border: 3px solid ${colorVariables.dark};
  border-radius: 50%;
  margin: 0 auto 1rem;
  background-color: ${colorVariables.primary};
  ${device.tablet} {
    width: 100px;
    height: 100px;
  };
`;

export const AboutAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  max-width: 100%;
`;

export const AboutText = styled.p`
  margin-bottom: 1rem;
  font-size: 3vh;
  font-weight: 700;
`;