import styled from 'styled-components';
import { get } from 'lodash';
import { colorVariables } from '../../theme/variables';

export const FolderList = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
`;

export const FolderItem = styled.li`
  display: inline-block;
  width: auto;
  position: relative;
  flex: 1;
  padding: 0.5rem;
  text-align: center;
`;

export const FolderLink = styled.a`
  display: block;
  color: ${colorVariables.dark};
`;

export const FolderImg = styled.img`
  width: 2rem;
  height: 3rem;
`;