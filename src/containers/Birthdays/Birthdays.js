import React, { 
  useEffect, 
  useState, 
  useCallback, 
  useRef, 
} from 'react';
import { 
  BirthdaysStyled,
  InfoContainer,
  InfoBlock,
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
  sortFunction, 
} from '../../helpers/helpers';
import { BirthdaysInfo } from '../../data/BirthdaysInfo';

const Birthdays = () => {

  const data = BirthdaysInfo;
  const [displayList, setDisplayList] = useState(false);
  const [closest, setClosest] = useState({});
  const [result, setResult] = useState([]);
  const date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const infoBtn = useRef();

  useEffect(() => {
    data.forEach((d) => {
      let year = currentYear;
      /*(d.date.month - 1) cause monthes in js start from 0.*/
      const dateMonth = d.date.month - 1;
      /*Boolean conditions*/
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
      d.timestamp = new Date(`${d.date.year}/${d.date.month}/${d.date.day}`);
      d.age = convertMsToYears((Date.now() - d.timestamp));
      /*We return the difference of months, if the month is the same, 
      but the day has already passed*/
      if(monthEqual && dayDiff) {
        d.age = d.age + 1;
      }
      d.sortDate = new Date(`${year}/${d.date.month}/${d.date.day}`);
      d.fullDate = dateParser(d.timestamp, 'full');
      d.printDate = dateParser(d.timestamp);
    });

    /*Sorting array ascending order*/
    const sortedData = sortFunction(data, date);
    /*Finding the same birthdays and push them to result array*/
    sortedData.map((d) => {
      if(d.date.day === sortedData[0].date.day && d.date.month === sortedData[0].date.month) {
        result.push(d);
      }
      return result;
    });
    /*Set closest*/
    setClosest(sortedData[0]);
    
  }, []);

  const changeClosest = useCallback((item) => {
    setClosest(item);
    setResult([item]);
  }, []);

  const InfoBlocksMarkup = result.map((item, index) => (
    <InfoBlock key={index}>
      <AvatarContainer>
        {item.img !== '' ? 
          <Avatar src={item.img} alt='avatar' /> :
          <Avatar src='/img/birthdays/ava.png' alt='avatar' />
        }
      </AvatarContainer>
      <InfoText>Name: {item.name}</InfoText>
      <InfoText>Age: {item.age}</InfoText>
  </InfoBlock>
  ));

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
        { InfoBlocksMarkup }
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