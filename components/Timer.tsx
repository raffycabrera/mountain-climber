
'use client';

import React, { useState, useEffect } from 'react';
import Climber from './Climber';
import CircularTimer from './CircularTimer';

type TimerProps = {
  initialTime: number;
};





const Timer = ({ initialTime }: TimerProps) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [key, setKey] = useState(0);


  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setTime(initialTime);
    setIsRunning(false);
    setKey((prevKey) => prevKey + 1);
  };

  const incrementTime = () => setTime(time + 1500 < 7200 ? time + 1500 : 7200);
  const decrementTime = () => setTime(time - 1500 > 0 ? time - 1500 : 1500);

  return (
    <div className="timer-container">

      {!isRunning && <div className="timer-controls">

        <div className="timer-buttons">
          <button className="timer-button" onClick={incrementTime}>Up</button>
          <button className="timer-button" onClick={decrementTime}>Down</button>
        </div>

      </div>}

      {isRunning && <CircularTimer duration={time} isRunning={isRunning} key={key} />

      }




      <div className="controls">
        {!isRunning && <button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>
      <Climber isRunning={isRunning} />
    </div>
  );
};

export default Timer;

