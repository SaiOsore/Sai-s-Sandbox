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

  let dataMarkup;

  if(data) {
    dataMarkup = data.map((item, index) => {
      return (
        <FolderItem key={index}>
          <FolderImg src={item.icon} alt={item.title} />
          <FolderLink href={item.src} title={item.title}>
            <span>
              {item.title}
            </span>
          </FolderLink>
        </FolderItem>
      )
    });
  }

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
      <div>
        { children }
        <FolderList>
          { dataMarkup }
        </FolderList>
      </div>
    </FolderStyled>
  );
};

export default Folder;
