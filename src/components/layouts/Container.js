import React from 'react';
import styled from 'styled-components';
// import { headerHeight } from '../../theme/variables';

const ContainerStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  flex: 1 0 auto;
`;

const Container = (props) => {
  const {
    className,
    onClick,
    tag,
    children,
  } = props;

  return (
    <ContainerStyled
      {...props}
      className={className}
      onClick={onClick}
      as={tag}
    >
      {' '}
      {children}
    </ContainerStyled>
  );
};

export default Container;
