function timeConversion(s) {
  const dayTime = s.slice(-2);
  const hour = s.slice(0, 2);
  const minuteAndSecond = s.slice(2, 8);
  let modifiedHour = ``;
  modifiedHour = hour;
  if (dayTime === `AM` && parseInt(hour) >= 12)
    modifiedHour = `0${parseInt(hour) - 12}`;
  if (dayTime === `PM` && parseInt(hour) < 12)
    modifiedHour = parseInt(hour) + 12;

  return `${modifiedHour}${minuteAndSecond}`;
}

timeConversion(`12:00:00AM`);
