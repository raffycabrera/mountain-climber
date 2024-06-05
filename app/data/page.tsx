'use client';

import React, { useEffect, useState } from 'react';
import { fetchTimeData } from '@/lib/getTimeData';
import styles from './data.module.css';

interface TimeData {
  date: string;
  total_duration: number;
}

const DataPage: React.FC = () => {
  const [timeData, setTimeData] = useState<TimeData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchTimeData();
        setTimeData(data);
      } catch (error) {
        console.error('Failed to fetch time data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Time Data for the Last Week</h1>
      <div className={styles.cards}>
        {timeData.map((data, index) => (
          <div key={index} className={styles.card}>
            <h2>{new Date(data.date).toLocaleDateString()}</h2>
            <p>{data.total_duration} minutes</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataPage;

