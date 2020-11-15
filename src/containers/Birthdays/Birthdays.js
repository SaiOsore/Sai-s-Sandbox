import React, 
{ 
  useEffect, 
  useState, 
  useCallback, 
  useRef, 
} from 'react';
import { 
  BirthdaysStyled,
  InfoContainer,
  AvatarContainer,
  Avatar,
  InfoText,
  InfoList,
  InfoItem,
  InfoButton,
  InfoListContainer,
} from './BirthdaysStyled';
import Countdown from '../../components/countdown/Countdown';
import { 
  dateParser, 
  convertMsToYears, 
} from '../../helpers/helpers';
import { BirthdaysInfo } from '../../data/BirthdaysInfo';

const Birthdays = () => {

  const data = BirthdaysInfo;
  let sortedData = [...data];
  const [displayList, setDisplayList] = useState(false);
  const [closest, setClosest] = useState({});
  const date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const infoBtn = useRef();

  useEffect(() => {
    sortedData.forEach((d) => {
      let year = currentYear;
      /*(d.date.month - 1) cause monthes in js start from 0.*/
      const dateMonth = d.date.month - 1;

      const monthDiff = currentMonth > dateMonth;
      const monthEqual = currentMonth === dateMonth;
      const dayDiff = currentDay >= d.date.day;

      if(monthDiff) {
        year++;
      }

      if(monthEqual && dayDiff) {
        year++;
      }

      /*Fill in the keys and values we need to work with data*/
      d.timestamp = new Date(`${d.date.year} ${d.date.month} ${d.date.day}`);
      d.age = convertMsToYears((Date.now() - d.timestamp));
      if(monthEqual && dayDiff) {
        d.age = d.age + 1;
      }
      d.sortDate = new Date(`${year} ${d.date.month} ${d.date.day}`);
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
  }, []);

  const ItemsMarkup = data.map((item, index) => (
    <InfoItem 
      key={index}
      onClick={() => {
        toggleList()
        changeClosest(item)
      }}
    >
      <p>Name: {item.name}</p>
      <p>Age: {item.age}</p>
      <p>Date: {item.fullDate}</p>
    </InfoItem>
  ));

  const toggleList = () => {
    if(displayList) {
      infoBtn.current.innerText = 'Show list';
    } else {
      infoBtn.current.innerText = 'Close list';
    }
    setDisplayList(!displayList);
  }

  return (
    <BirthdaysStyled>
      <InfoListContainer>
        <InfoButton
          ref={infoBtn}
          onClick={toggleList}
        >
          Show list
        </InfoButton>
        { displayList && 
          <InfoList>
            { ItemsMarkup }
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