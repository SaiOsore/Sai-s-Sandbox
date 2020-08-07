import React from 'react';
import Folder from '../../components/folder/Folder';

import { showFolder } from '../../actions/index';
import { connect } from 'react-redux';

const Folders = ({ showFolder, folders }) => {

  const FoldersMarkup = Object.entries(folders).map(([key, thread]) => {
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