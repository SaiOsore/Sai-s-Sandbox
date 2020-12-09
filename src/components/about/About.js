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
        Hello! My nickname is Sai and this is my react.js sandbox. Thanks for attention!
      </AboutText>
    </AboutStyled>
  );
};

export default About;