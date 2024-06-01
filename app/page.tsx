import React from 'react';
import Timer from '../components/Timer';
import '../styles/App.css';


const Home = () => {
  const initialTime = 1500; // 25 minutes in seconds
  return (
    <div className="App">
      <Timer initialTime={initialTime} />
    </div>
  );
};

export default Home;

