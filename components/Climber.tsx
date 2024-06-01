// components/Climber.tsx
import React from 'react';
import { motion } from 'framer-motion';

type ClimberProps = {
  isRunning: boolean;
};

const Climber = ({ isRunning }: ClimberProps) => {
  return (
    <div className="climber-container">
      <motion.div
        className="climber"
        animate={isRunning ? { y: [0, -10, 0] } : { y: 0 }}
        transition={isRunning ? { duration: 0.5, repeat: Infinity } : {}}
      />
    </div>
  );
};

export default Climber;

