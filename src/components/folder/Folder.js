import React from 'react';
import { 
  FolderStyled,
  FolderHeader,
  FolderTitle,
  FolderCloseBtn,
} from './FolderStyled';

const Folder = (props) => {
  const {
    id,
    className,
    onClick,
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
      onClick={onClick}
      as={tag}
      color={color}
      hovercolor={hoverColor}
      id={id}
      display={display}
      folderTheme={folderTheme}
    >
      <FolderHeader>
        <FolderTitle>
          {id}
        </FolderTitle>
        <FolderCloseBtn onClick={onClose}>
          X
        </FolderCloseBtn>
      </FolderHeader>
    </FolderStyled>
  );
};

export default Folder;
