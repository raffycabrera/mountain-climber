import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { saveTime } from '@/lib/action';


type CircularTimerProps = {
  duration: number;
  isRunning: boolean;
  key: number;
};





const CircularTimer = ({ duration, isRunning, key }: CircularTimerProps) => {


  const handleComplete = async () => {
    const time = duration;

    try {
      const result = await saveTime(time);
      console.log('Time entry saved:', result);
    } catch (error) {
      console.error('Error saving time entry:', error);
    }

    // Return false to stop the timer
    return { shouldRepeat: false };
  };


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
        onComplete={() => {
          handleComplete(); // Call handleComplete function
          return { shouldRepeat: false, delay: 1500 };
        }}
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

