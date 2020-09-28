import React, { useState, useEffect } from 'react';
import Dropdown from '../dropdown/Dropdown';
import Logo from '../logo/Logo';
import { formatTime, dateParser } from '../../helpers/helpers';
import { 
  HeaderStyled,
  HeaderLeft,
  HeaderNav,
  HeaderList,
  HeaderItem,
  HeaderLink,
  HeaderButton,
  HeaderTime,
} from './HeaderStyled';

const Header = () => {

/*DATE and TIME*/
  const [date, setDate] = useState(new Date());

  let tick = () => {
    setDate(new Date());
  }

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000 );
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const currentDate = dateParser(date, 'clock');
  const email = 'sai.osore@gmail.com';
  const website = 'https://saiosore.github.io/';

/*DATA*/
  const Lists = {
    File: [
      {
        src: '#',
        title: 'About',
        id: 'about',
      },
      {
        src: '#',
        title: 'Projects',
        id: 'projects',
      },
    ],
    Contact: [
      {
        src: `mailto:${email}`,
        title: 'Email',
      },
      {
        target: '_blanc',
        src: `${website}`,
        title: 'Portfolio',
      },
    ],
  };

/*DROPDOWN TOGGLE*/
const [showDropdown, setShowDropdown] = useState(false);
const [showSecondDropdown, setShowSecondDropdown] = useState(false);

const toggleDropdown = (e) => {
  setShowDropdown(!showDropdown);
}

  return (
    <HeaderStyled>
      <HeaderLeft>
        <Logo />
        <HeaderNav>
          <HeaderList>
            <HeaderItem>
              <HeaderButton onClick={toggleDropdown}>
                File
              </HeaderButton>
              {
                showDropdown &&
                <Dropdown 
                  items={Lists.File}
                />
              }
            </HeaderItem>
             <HeaderItem>
              <HeaderButton onClick={() => setShowSecondDropdown(!showSecondDropdown)}>
                Contact
              </HeaderButton>
              {
                showSecondDropdown &&
                <Dropdown 
                  items={Lists.Contact}
                />
              }
            </HeaderItem>
            <HeaderItem>
              <HeaderLink href='#'>
                Settings
              </HeaderLink>
            </HeaderItem>
          </HeaderList>
        </HeaderNav>
      </HeaderLeft>
      <HeaderNav RightNav>
        <HeaderList>
          <HeaderItem>
            {email}
          </HeaderItem>
          <HeaderItem>
            <HeaderTime>
              {currentDate}
            </HeaderTime>
          </HeaderItem>
        </HeaderList>
      </HeaderNav>
    </HeaderStyled>
  );
}

export default Header;