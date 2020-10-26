import React from 'react';
import Aside from '../../components/nav/Aside';
import MainBanner from '../../components/banner/MainBanner';
import { 
  HomeStyled, 
  HomeWrapper,
  GridPattern 
} from './HomeStyled';
import { toggleFolder } from '../../actions/index';
import { connect } from 'react-redux';

const Home = ({ toggleFolder }) => {

  const items = [
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
  ];

  return (
    <HomeStyled>
      <HomeWrapper />
      <GridPattern />
      <Aside
        items={items}
        onClick={(e) => {
          e.preventDefault();
          if(e.target.dataset.id !== undefined) {
            toggleFolder(e.target.dataset.id);
          }
        }}
      />
      <MainBanner />
    </HomeStyled>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFolder: (id)=>{dispatch(toggleFolder(id))},
  }
}

export default connect(null, mapDispatchToProps)(Home);