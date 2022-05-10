import React from 'react';
import { useTimer } from 'react-timer-hook';

const Timer = ({ expiryTimestamp, setIsBirthday }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      setIsBirthday(true);
    },
  });

  return (
    <div className="timer-block">
      {/* <h1>Групповая мастурбация начнется через:</h1> */}

      <div style={{ fontSize: '120px' }}>
        <span>{days > 9 ? days : '0' + days}</span>:<span>{hours > 9 ? hours : '0' + hours}</span>:
        <span>{minutes > 9 ? minutes : '0' + minutes}</span>:
        <span>{seconds > 9 ? seconds : '0' + seconds}</span>
      </div>

      {/* <button
        onClick={() => {
          setIsBirthday(true);
        }}
      >
        Start
      </button> */}
    </div>
  );
};

export default Timer;
