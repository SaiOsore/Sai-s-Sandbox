import React from 'react';
import Aside from '../../components/nav/Aside';
import Folders from '../../components/folder/Folders';
import MainBanner from '../../components/banner/MainBanner';
import { 
  HomeStyled, 
  HomeWrapper,
  GridPattern 
} from './HomeStyled';
import { showFolder } from '../../actions/index';
import { connect } from 'react-redux';

const Home = ({ showFolder }) => {

  const items = [
    {
      src: '#',
      title: 'Projects',
      id: 'projects',
    },
    {
      src: '#',
      title: 'Photos',
      id: 'photos',
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
            showFolder(e.target.dataset.id);
          }
        }}
      />
      <Folders />
      <MainBanner />
    </HomeStyled>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    showFolder: (id)=>{dispatch(showFolder(id))},
  }
}

export default connect(null, mapDispatchToProps)(Home);