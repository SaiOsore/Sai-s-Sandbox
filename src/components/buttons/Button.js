import React from 'react';
import { ButtonStyled } from './ButtonStyled';

const Button = (props) => {
  const {
    className,
    onClick,
    tag,
    children,
    hoverColor,
    color,
    fontFamily,
  } = props;

  return (
    <ButtonStyled
      {...props}
      className={className}
      onClick={onClick}
      as={tag}
      color={color}
      hovercolor={hoverColor}
      fontFamily={fontFamily}
    >
      {' '}
      {children}
    </ButtonStyled>
  );
};

export default Button;
