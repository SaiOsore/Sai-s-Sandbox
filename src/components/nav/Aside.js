import React from 'react';
import { 
  AsideStyled,
  AsideNav,
  AsideList,
  AsideItem,
  AsideLink,
} from './AsideStyled';

const Aside = (props) => {
  const {
    items,
    className,
    onClick,
    tag,
    children,
    hoverColor,
    color,
  } = props;

  const ItemsMarkup = items.map((item, index) => (
    <AsideItem key={index}>
      <AsideLink 
        data-id={item.id} 
        onClick={onClick} 
        href={item.src} 
        title={item.title}
      >
        {item.title}
      </AsideLink>
    </AsideItem>
  ));

  return (
    <AsideStyled
      className={className}
      as={tag}
      color={color}
      hovercolor={hoverColor}
    >
      <AsideNav>
        <AsideList>
          {ItemsMarkup}
        </AsideList>
      </AsideNav>
    </AsideStyled>
  );
};

export default Aside;
