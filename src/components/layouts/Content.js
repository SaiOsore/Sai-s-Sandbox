import React from 'react';
import styled from 'styled-components';

const ContentStyled = styled.div`
  max-width: 1120px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const Content = (props) => {
  const {
    className,
    onClick,
    tag,
    children,
  } = props;

  return (
    <ContentStyled
      {...props}
      className={className}
      onClick={onClick}
      as={tag}
    >
      {' '}
      {children}
    </ContentStyled>
  );
};

export default Content;
