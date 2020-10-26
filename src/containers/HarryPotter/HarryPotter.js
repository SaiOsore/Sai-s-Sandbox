import React, { useState, useEffect, useCallback } from 'react';
import {
  HarryPotterStyled,
  Title,
  SearchContainer,
  SearchInput,
  List,
  Item,
  Info,
  Name,
  Text,
  Img,
} from './HarryPotterStyled';

const MAIN_URL = 'https://hp-api.herokuapp.com/api/characters';

const HarryPotter = () => {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(undefined);

  const loadCharacters = useCallback(async () => {
    try {
      const res = await fetch(MAIN_URL);
      setData(await res.json());
    } catch (err) {
      console.error(err);
    }
  }, []);

  const searchByValue = (e) => {
    const searchString = e.target.value.trim().toLowerCase();
    const filteredCharacters = data.filter((character) => {
      return (
        character.name.toLowerCase().includes(searchString) ||
        character.house.toLowerCase().includes(searchString)
      );
    });
    setFilteredData(filteredCharacters);
  }

  const displayItems = (items) => {
    return items.length ? items.map((item, index) => (
      <Item 
        key={index}
      >
        <Info>
          <Name>
            <span>Name:</span> {item.name}
          </Name>
          <Text>
            <span>House:</span> {item.house === '' ? 'unknown' : item.house}
          </Text>
          <Text>
            <span>Birthday:</span> {item.dateOfBirth === '' ? 'unknown' : item.dateOfBirth}
          </Text>
        </Info>
        <Img src={item.image} alt={item.name} />
      </Item>
    )) : '(・ω・) (・ω・) magic';
  }

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  return (
    <HarryPotterStyled>
      <Title>Harry Potter searcher</Title>
      <SearchContainer>
        <SearchInput
          type='text'
          placeholder='Search'
          onKeyUp={searchByValue}
        />
      </SearchContainer>
      <List>
        {
          filteredData !== undefined ? 
          displayItems(filteredData) : 
          displayItems(data)
        }
      </List>
    </HarryPotterStyled>
  );

}

export default HarryPotter;