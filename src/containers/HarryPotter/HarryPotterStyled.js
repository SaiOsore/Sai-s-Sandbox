import styled from 'styled-components';
import { colorVariables } from '../../theme/variables';

export const HarryPotterStyled = styled.div`
  padding: 23px 1rem;
`;

export const Title = styled.h1`
  margin-bottom: 40px;
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 50px;
  max-width: 500px;
  &:after {
    content: '🔍';
    position: absolute;
    top: 10px;
    right: 15px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 3px;
  border: 1px solid ${colorVariables.secondary};
  padding: 5px 10px;
  font-size: 12px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 20px;
`;

export const Item = styled.li`
  background-color: ${colorVariables.secondary};
  padding: 14px;
  display: flex;
  justify-content: space-between;
  text-align: left;
`;

export const Info = styled.div`
  width: 60%;
`;

export const Name = styled.h2`
  margin-bottom: 20px;
`;

export const Text = styled.p`
  margin-bottom: 15px;
`;

export const Img = styled.img`
  display: block;
  max-height: 100px;
`;