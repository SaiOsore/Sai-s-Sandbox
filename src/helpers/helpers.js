import { usePath } from 'hookrouter';

export const PathLabel = (url, className = "active") => {
  const path = usePath();
  if(path === url) {
    return className;
  }
}

export const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
}

export const convertMsToYears = (ms) => {
  const age = Math.floor(ms / 31536000000);
  return age;
}

export const convertDateForIos = (date) => {
  const arr = date.split(/[- :]/);
  date = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
  return date;
}

export  const dateParser = (date, type) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  const now = new Date();
  const currentYear = now.getFullYear();

  const year = date.getFullYear();
  const day = date.getDate();
  const dayInteger = date.getDay();
  const month = date.getMonth();
  const currentMonth = months[month];
  const currentDay = days[dayInteger];
  const hours = date.getHours();
  const minutes = date.getMinutes();

  let currentDate;

  if(type === 'ms') {
    currentDate = Date.parse(date);
  } else if(type === 'clock') {
    currentDate = `${currentDay} ${hours}:${formatTime(minutes)}`;
  } else if(type === 'ios') {
    currentDate = `${currentYear} ${month} ${dayInteger}`;
  } else if(type === 'full') {
    currentDate = `${day} / ${currentMonth} / ${year}`;
  } else {
    currentDate = `${day} ${currentMonth} ${currentYear}`;
  }

  return currentDate;
}