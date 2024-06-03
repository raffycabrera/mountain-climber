import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

type CircularTimerProps = {
  duration: number;
  isRunning: boolean;
  key: number;
};

const CircularTimer = ({ duration, isRunning, key }: CircularTimerProps) => {
  return (
    <div className="circular-timer">
      <CountdownCircleTimer
        key={key}
        isPlaying={isRunning}
        duration={duration}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
        size={140}
        strokeWidth={10}
        rotation='clockwise'
        isGrowing={true}
        onComplete={() => ({ shouldRepeat: false })}
      >
        {({ remainingTime }) => (
          <div className="timer">
            {Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? `0${remainingTime % 60}` : remainingTime % 60}
          </div>
        )}
      </CountdownCircleTimer>
    </div>
  );
};

export default CircularTimer;

