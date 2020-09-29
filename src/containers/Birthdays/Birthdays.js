import React, { useEffect, useState } from 'react';
import { 
  BirthdaysStyled,
} from './BirthdaysStyled';
import Countdown from '../../components/countdown/Countdown';
import { dateParser } from '../../helpers/helpers';

const INFO = [
  {
    name: 'Sai',
    date: {
      day: 17,
      month: 3,
      year: 1992,
    },
    img: '/',
  },
  {
    name: 'Kazhan',
    date: {
      day: 13,
      month: 10,
      year: 1996,
    },
    img: '/',
  },
  {
    name: 'Sonya Halych',
    date: {
      day: 10,
      month: 10,
      year: 2009,
    },
    img: '/',
  },
  {
    name: 'Mother',
    date: {
      day: 21,
      month: 6,
      year: 1963,
    },
    img: '/',
  },
  {
    name: 'Father',
    date: {
      day: 17,
      month: 3,
      year: 1965,
    },
    img: '/',
  },
  {
    name: 'Brother',
    date: {
      day: 20,
      month: 10,
      year: 1987,
    },
    img: '/',
  },
];

const convertMsToYears = (ms) => {
  const age = Math.floor(ms / 31536000000);
  return age;
}

const Birthdays = () => {

  const [data, setData] = useState(INFO);
  const [date, setDate] = useState(new Date());

  let closest;
  let sortedData = [...data];
  const currentDay = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  sortedData.forEach((d) => {
    let year = currentYear;
    if(currentMonth > d.date.month) {
      year = currentYear + 1;
    }
    d.timestamp = new Date(`${d.date.year} ${d.date.month} ${d.date.day}`);
    d.sortDate = new Date(`${year} ${d.date.month} ${d.date.day}`);
    d.age = convertMsToYears((date - d.timestamp));
    d.printDate = dateParser(d.timestamp);

  });

  sortedData.sort(function(a, b) {
    var distanceA = Math.abs(date - a.sortDate);
    var distanceB = Math.abs(date - b.sortDate);
    return distanceA - distanceB;
  });

  closest = sortedData[0];

  return (
    <BirthdaysStyled>
      { closest.printDate &&
        <Countdown
          propsDate={closest.printDate}
        />
      }
      <p>{closest.name}</p>
      <p>{closest.age}</p>
    </BirthdaysStyled>
  );
}

export default Birthdays;