import React from 'react';
import { 
  FolderStyled,
  FolderHeader,
  FolderTitle,
  FolderCloseBtn,
  FolderContainer
} from './FolderStyled';

const Folder = (props) => {
  const {
    id,
    className,
    tag,
    children,
    hoverColor,
    color,
    display,
    onClose,
    folderTheme,
  } = props;

  return (
    <FolderStyled
      className={className}
      as={tag}
      color={color}
      hovercolor={hoverColor}
      id={id}
      display={display}
      folderTheme={folderTheme}
      draggable={true}
    >
      <FolderHeader>
        <FolderTitle>
          {id}
        </FolderTitle>
        <FolderCloseBtn onClick={onClose}>
          X
        </FolderCloseBtn>
      </FolderHeader>
      <FolderContainer>
        {children}
      </FolderContainer>
    </FolderStyled>
  );
};

export default Folder;