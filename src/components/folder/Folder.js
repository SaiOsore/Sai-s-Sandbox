import React from 'react';
import { 
  FolderStyled,
  FolderHeader,
  FolderTitle,
  FolderCloseBtn,
  FolderList,
  FolderItem,
  FolderLink,
  FolderImg
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
    data,
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
      { children }
    </FolderStyled>
  );
};

export default Folder;
