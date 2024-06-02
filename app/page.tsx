import React from 'react';
import Timer from '../components/Timer';
import SVGDefs from '@/styles/svgDef';
import '../styles/App.css';


const Home = () => {
  const initialTime = 30; //1500 25 minutes in seconds
  return (
    <div className="App">
      <Timer initialTime={initialTime} />
    </div>
  );
};

export default Home;

