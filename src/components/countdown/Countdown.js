import React, {useEffect, useState } from 'react';
import { formatTime } from '../../helpers/helpers';
import { 
  CountdownStyled,
  CountdownBlock,
  CountdownNum,
  CountdownText,
} from './CountdownStyled';

const Countdown = ({ propsDate }) => {

  const [countdownDate, setCountdownDate] = useState(new Date(propsDate).getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let timer = setInterval(() => setNewTime(), 1000);
    return () => {clearInterval(timer);}
  }, [state.seconds]);

  const setNewTime = () => {
    if(countdownDate) {
      const currentTime = new Date().getTime();
      
      let distanceToDate = countdownDate - currentTime;
      if(countdownDate < currentTime) {
        distanceToDate = distanceToDate * -1;
      }

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

      days = formatTime(days);
      hours = formatTime(hours);
      minutes = formatTime(minutes);
      seconds = formatTime(seconds);

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

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