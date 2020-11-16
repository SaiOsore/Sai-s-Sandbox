import React from 'react';
import Folder from '../../components/folder/Folder';
import Projects from '../../components/projects/Projects';
import About from '../../components/about/About';
import Settings from '../../components/settings/Settings';

import { toggleFolder } from '../../actions/index';
import { connect } from 'react-redux';

const Folders = ({ toggleFolder, folders }) => {

  const FoldersMarkup = Object.entries(folders).map(([key, thread]) => {
    const child = () => {
      switch(thread.type) {
        case 'projects' :
          return  <Projects 
                    onClose={() => {
                      toggleFolder(key);
                    }} 
                    data={
                      thread.items
                    } 
                  />;
        case 'about' :
          return <About />;
        case 'settings' :
          return <Settings />;
        default :
          return;
      }
    }
    return (
      thread.showed && 
        <Folder 
          key={key}
          id={thread.id}
          folderTheme={thread.folderTheme}
          onClose={() => {
            toggleFolder(key);
          }}
          children={child()}
        />
      )
  });

  return (
    <>
      { FoldersMarkup }
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
    toggleFolder: (id)=>{dispatch(toggleFolder(id))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Folders);