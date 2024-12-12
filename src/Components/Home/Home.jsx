import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);
const Data = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234
  }
];
function Home({setJwtToken}) {
  
  return (
    <div>
        <Nav setJwtToken={setJwtToken}/>
        
    </div>
  )
}

export default Home