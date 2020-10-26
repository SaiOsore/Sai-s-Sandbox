import React from 'react';
import { 
  DropdownStyled,
  DropdownItem,
  DropdownLink
} from './DropdownStyled';

const Dropdown = (props) => {
  const {
    items,
    className,
    onClick,
    tag,
    children,
    hoverColor,
    color,
    display,
  } = props;

  const ItemsMarkup = items.map((item, index) => (
    <DropdownItem 
      key={index} 
    >
      <DropdownLink 
        target={item.target} 
        href={item.src} 
        title={item.title}
        data-id={item.id} 
        onClick={onClick} 
      >
        {item.title}
      </DropdownLink>
    </DropdownItem>
  ));

  return (
    <DropdownStyled
      className={className}
      as={tag}
      color={color}
      hovercolor={hoverColor}
      display={display}
    >
      {children}
      {ItemsMarkup}
    </DropdownStyled>
  );
};

export default Dropdown;
