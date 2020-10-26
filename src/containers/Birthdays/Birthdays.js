import React, { useEffect, useState, useCallback } from 'react';
import { 
  BirthdaysStyled,
  InfoContainer,
  AvatarContainer,
  Avatar,
  InfoText,
  InfoList,
  InfoItem,
  InfoListClose,
  InfoButton,
  InfoListContainer,
} from './BirthdaysStyled';
import Countdown from '../../components/countdown/Countdown';
import { dateParser, convertMsToYears } from '../../helpers/helpers';
import { BirthdaysInfo } from '../../data/BirthdaysInfo';

const Birthdays = () => {

  const [data, setData] = useState(BirthdaysInfo);
  let sortedData = [...data];
  const [displayList, setDisplayList] = useState(false);
  const [closest, setClosest] = useState({});
  const [date, setDate] = useState(new Date());
  const currentDay = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  useEffect(() => {
    sortedData.forEach((d) => {
      /*If this year's birthday has already passed, we change the year by +1*/
      let year = currentYear;
      if(currentMonth > d.date.month) {
        year = currentYear + 1;
      }
      /*Fill in the keys and values we need to work with data*/
      d.timestamp = new Date(`${d.date.year} ${d.date.month} ${d.date.day}`);
      d.sortDate = new Date(`${year} ${d.date.month} ${d.date.day}`);
      d.age = convertMsToYears((date - d.timestamp));
      d.fullDate = dateParser(d.timestamp, 'full');
      d.printDate = dateParser(d.timestamp);
    });
    /*Sorting array ascending order*/
    sortedData.sort((a, b) => {
      const distanceA = Math.abs(date - a.sortDate);
      const distanceB = Math.abs(date - b.sortDate);
      return distanceA - distanceB;
    });

    setClosest(sortedData[0]);
  }, []);

  const changeClosest = useCallback((item) => {
    setClosest(item);
  }, [ closest ]);

  const ItemsMarkup = data.map((item, index) => (
    <InfoItem 
      key={index}
      onClick={() => {
        closeShowList()
        changeClosest(item)
      }}
    >
      <p>Name: {item.name}</p>
      <p>Age: {item.age}</p>
      <p>Date: {item.fullDate}</p>
    </InfoItem>
  ));

  const showList = (e) => {
    const target = e.target;
    if(displayList) {
      target.innerText = 'Show list';
    } else {
      target.innerText = 'Close list';
    }
    setDisplayList(!displayList);
  }

  const closeShowList = () => {
    setDisplayList(!displayList);
  }

  return (
    <BirthdaysStyled>
      <InfoListContainer>
        <InfoButton
          onClick={showList}
        >
          Show list
        </InfoButton>
        { displayList && 
          <InfoList>
            {ItemsMarkup}
          </InfoList>
        }
      </InfoListContainer>
      <InfoContainer>
        <AvatarContainer>
          {closest.img !== '' ? 
            <Avatar src={closest.img} alt='avatar' /> :
            <Avatar src='/img/birthdays/ava.png' alt='avatar' />
          }
        </AvatarContainer>
        <InfoText>Name: {closest.name}</InfoText>
        <InfoText>Age: {closest.age}</InfoText>
      </InfoContainer>
      {closest.printDate &&
        <Countdown
          propsDate={closest.printDate}
        />
      }
    </BirthdaysStyled>
  );
}

export default Birthdays;