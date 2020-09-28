import React, { useEffect, useState } from 'react';
import { 
  BirthdaysStyled,
} from './BirthdaysStyled';
import Countdown from '../../components/countdown/Countdown';
import { dateParser } from '../../helpers/helpers';

const INFO = [
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
    name: 'Sonya',
    date: {
      day: 10,
      month: 10,
      year: 2009,
    },
    img: '/',
  },
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
    name: 'Мама',
    date: {
      day: 21,
      month: 6,
      year: 1963,
    },
    img: '/',
  },
  {
    name: 'Папа',
    date: {
      day: 17,
      month: 3,
      year: 1965,
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

  let closest = Infinity;
  let sortedData = [...data];
  const currentDay = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  sortedData.forEach(function(d) {
    d.timestamp = new Date(`${d.date.year} ${d.date.month} ${d.date.day}`);
    d.age = convertMsToYears((date - d.timestamp));
    d.printDate = dateParser(d.timestamp);
    d.sortDate = dateParser(d.timestamp, 'sort');
    const ourDate = new Date(d.sortDate);
    if (ourDate >= date && ourDate < closest) {
      closest = d;
    }
  });

  return (
    <BirthdaysStyled>
      <Countdown propsDate={closest.printDate} />
      <p>{closest.name}</p>
      <p>{closest.age}</p>
    </BirthdaysStyled>
  );
}

export default Birthdays;