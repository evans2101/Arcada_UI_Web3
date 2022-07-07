import React, { useState } from "react";
import PropTypes from "prop-types"

const Timer = ({ timeInSecond, setExpired }) => {
  const [timer, setTimer] = useState();

  React.useEffect(() => {
    const _timer =
      timer > 0 &&
      setInterval(() => {
        setTimer(timer - 1);
        time_remain();
      }, 1000);

    if (timer === 0) {
      setExpired();
    }
    return () => clearInterval(_timer);
  }, [timer]);

  React.useEffect(() => {
    if (timeInSecond >= 0) {
      setTimer(timeInSecond);
      return;
    }
  }, [timeInSecond]);

  const setDigits = (digit) => {
    if (digit.toString().length === 1) {
      return `0${digit}`;
    }
    return digit;
  };
  const time_remain = () => {
    let hours = Math.floor(timer / 3600);
    let minutes = Math.floor((timer % 3600) / 60);
    let seconds = timer % 60;

    return `${setDigits(hours)}h : ${setDigits(minutes)}m : ${setDigits(
      seconds
    )}s`;
  };

  return <>{time_remain()}</>;
};

Timer.propTypes = {
  timeInSecond: PropTypes.number,
  setExpired: PropTypes.func
}

export default Timer;
