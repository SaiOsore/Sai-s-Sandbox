import styled from 'styled-components';
import { colorVariables } from '../../theme/variables';
import Link from '../links/Link/Link';

export const ProjectsList = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
`;

export const ProjectsItem = styled.li`
  display: inline-block;
  width: auto;
  position: relative;
  flex: 1;
  padding: 0.5rem;
  text-align: center;
`;

export const ProjectsLink = styled(Link)`
  display: block;
  color: ${colorVariables.dark};
  &:hover {
    color: ${colorVariables.primary};
  }
`;

export const ProjectsIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: 2rem;
    height: 3rem;
  }
`;

export const ProjectsImg = styled.img`
  width: 2rem;
  height: 3rem;
`;