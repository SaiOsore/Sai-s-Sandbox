import React, { useEffect, useState, useCallback } from 'react';
import { formatTime, dateParser } from '../../helpers/helpers';
import { 
  CountdownStyled,
  CountdownBlock,
  CountdownNum,
  CountdownText,
} from './CountdownStyled';

const Countdown = ({ propsDate }) => {

  const [countdownDate, setCountdownDate] = useState(new Date(propsDate).getTime());
  const [state, setState] = useState({
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  });

  useEffect(() => {
    /*Rerender function will be delayed by the timeout*/
    let timer = setInterval(() => setNewTime(), 1000);
    return () => {clearInterval(timer);}
  }, [state.seconds, propsDate, countdownDate]);

  const setNewTime = useCallback(() => {
    setCountdownDate(new Date(propsDate).getTime());
    const currentTime = new Date().getTime();
    let distanceToDate = countdownDate - currentTime;

    /*If birthday from array will be in the next year,
      convert difference in daysInTheYear(usually 366) - distanceToDate * -1*/
    if(countdownDate < currentTime) {
      const now = new Date();
      const currentYear = now.getFullYear();
      const daysInTheYear = (new Date(currentYear,11,31) - new Date(currentYear,0,0));
      /*Time from birthday to current time in ms*/
      distanceToDate = distanceToDate * -1;
      /*We translate the time difference to the next birthday (next year), 
        not the current one.*/
      const diff = daysInTheYear - distanceToDate;
      distanceToDate = diff;
    }

    /*Converting difference from ms to out countdown timer date*/
    let days = Math.floor(
      distanceToDate / (1000 * 60 * 60 * 24),
    );
    let hours = Math.floor(
      (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    let minutes = Math.floor(
      (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
    );
    let seconds = Math.floor(
      (distanceToDate % (1000 * 60)) / 1000,
    );

    /*Formatting the time if num < 10*/
    days = formatTime(days);
    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    setState({ days: days, hours: hours, minutes, seconds });
  }, [countdownDate, propsDate]);

  return (
    <CountdownStyled>
      { state.days &&
        <>
          <CountdownBlock>
            <CountdownNum>{state.days}</CountdownNum>
            <CountdownText>days</CountdownText>
          </CountdownBlock>
          <CountdownBlock>
            <CountdownNum>{state.hours}</CountdownNum>
            <CountdownText>hours</CountdownText>
          </CountdownBlock>
          <CountdownBlock>
            <CountdownNum>{state.minutes}</CountdownNum>
            <CountdownText>mins</CountdownText>
          </CountdownBlock>
          <CountdownBlock>
            <CountdownNum>{state.seconds}</CountdownNum>
            <CountdownText>seconds</CountdownText>
          </CountdownBlock>
        </>
      }
    </CountdownStyled>
  );
}

export default Countdown;