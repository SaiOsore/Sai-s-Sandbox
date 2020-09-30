import React from 'react';
import { 
  AboutStyled,
  AboutAvatarContainer,
  AboutAvatar,
  AboutText,
} from './AboutStyled';

const About = () => {

  return (
    <AboutStyled>
      <AboutAvatarContainer>
        <AboutAvatar src='/img/birthdays/Sai.jpg' alt='avatar' />
      </AboutAvatarContainer>
      <AboutText>
        Hello! My name is Sai and this is my react sandbox. Good luck!
      </AboutText>
    </AboutStyled>
  );
};

export default About;