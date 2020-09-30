import React from 'react';
import Folder from '../../components/folder/Folder';
import Projects from '../../components/projects/Projects';
import About from '../../components/about/About';

import { showFolder } from '../../actions/index';
import { connect } from 'react-redux';

const Folders = ({ showFolder, folders }) => {

  const FoldersMarkup = Object.entries(folders).map(([key, thread]) => {

    let child;

    if(thread.type === 'projects') {
      child = <Projects data={thread.items} />;
    }
    if(thread.type === 'about') {
      child = <About />;
    }

    return (
      thread.showed && 
        <Folder 
          key={key}
          id={thread.id}
          folderTheme={thread.folderTheme}
          onClose={() => {
            showFolder(key);
          }}
          children={child}
        />
      )
  });

  return (
    <>
      {FoldersMarkup}
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Folders);