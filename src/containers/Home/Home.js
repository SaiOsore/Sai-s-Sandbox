import React from 'react';
import Aside from '../../components/nav/Aside';
import Folder from '../../components/folder/Folder';
import { 
  HomeStyled, 
  HomeWrapper,
  GridPattern 
} from './HomeStyled';

import { showFolder } from '../../actions/index';
import { connect } from 'react-redux';

const Home = ({ showFolder, folders }) => {

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
    },
  ];

  const Folders = Object.entries(folders).map(([key, thread]) => {
    return (
      thread.showed && 
        <Folder 
          key={key}
          id={thread.id}
          folderTheme={thread.folderTheme}
          onClose={() => {
            showFolder(key);
          }}
        />
      )
  });

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
      {Folders}
    </HomeStyled>
  );
}

const mapStateToProps = (state) => {
  return {
    folders: state.folders,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    showFolder: (id)=>{dispatch(showFolder(id))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);