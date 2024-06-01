
'use client';

import React, { useState, useEffect } from 'react';
import Climber from './Climber';

type TimerProps = {
  initialTime: number;
};

const Timer = ({ initialTime }: TimerProps) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setTime(initialTime);
    setIsRunning(false);
  };

  const incrementTime = () => setTime(time + 1500 < 7200 ? time + 1500 : 7200);
  const decrementTime = () => setTime(time - 1500 > 0 ? time - 1500 : 1500);

  return (
    <div className="timer-container">
      <div className="timer-controls">

        <div className="timer">
          {Math.floor(time / 60)}:{time % 60 < 10 ? '0' + (time % 60) : time % 60}
        </div>
        <div className="timer-buttons">
          <button className="timer-button" onClick={incrementTime}>Up</button>
          <button className="timer-button" onClick={decrementTime}>Down</button>
        </div>

      </div>


      <div className="controls">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <Climber isRunning={isRunning} />
    </div>
  );
};

export default Timer;

