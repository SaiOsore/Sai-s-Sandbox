import React, { useState, useEffect } from 'react';
import Dropdown from '../dropdown/Dropdown';
import Logo from '../logo/Logo';
import { dateParser } from '../../helpers/helpers';
import { 
  HeaderStyled,
  HeaderLeft,
  HeaderNav,
  HeaderList,
  HeaderItem,
  HeaderButton,
  HeaderTime,
} from './HeaderStyled';
import { toggleFolder } from '../../actions/index';
import { connect } from 'react-redux';

const Header = ({ toggleFolder }) => {

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
        title: 'Projects',
        id: 'projects',
      },
      {
        src: '#',
        title: 'About',
        id: 'about',
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
    Settings: [
      {
        src: '#',
        title: 'All',
        id: 'settings',
      },
    ],
  };

  /*DROPDOWN TOGGLE*/
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSecondDropdown, setShowSecondDropdown] = useState(false);
  const [showThirdDropdown, setShowThirdDropdown] = useState(false);

  return (
    <HeaderStyled>
      <HeaderLeft>
        <Logo />
        <HeaderNav>
          <HeaderList>
            <HeaderItem>
              <HeaderButton onClick={() => (
                setShowDropdown(!showDropdown)
              )}>
                File
              </HeaderButton>
              {
                showDropdown &&
                <Dropdown 
                  onClick={(e) => {
                    e.preventDefault();
                    setShowDropdown(!showDropdown);
                    if(e.target.dataset.id !== undefined) {
                      toggleFolder(e.target.dataset.id);
                    }
                  }}
                  className={'active'}
                  items={Lists.File}
                />
              }
            </HeaderItem>
             <HeaderItem>
              <HeaderButton onClick={() => (
                setShowSecondDropdown(!showSecondDropdown)
              )}>
                Contact
              </HeaderButton>
              {
                showSecondDropdown &&
                <Dropdown 
                  onClick={() => {setShowSecondDropdown(!showSecondDropdown)}}
                  className={'active'}
                  items={Lists.Contact}
                />
              }
            </HeaderItem>
            <HeaderItem>
              <HeaderButton onClick={() => (
                setShowThirdDropdown(!showThirdDropdown)
              )}>
                Settings
              </HeaderButton>
              {
                showThirdDropdown &&
                <Dropdown 
                  onClick={(e) => {
                    e.preventDefault();
                    setShowThirdDropdown(!showThirdDropdown);
                    if(e.target.dataset.id !== undefined) {
                      toggleFolder(e.target.dataset.id);
                    }
                  }}
                  className={'active'}
                  items={Lists.Settings}
                />
              }
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

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFolder: (id)=>{dispatch(toggleFolder(id))},
  }
}

export default connect(null, mapDispatchToProps)(Header);