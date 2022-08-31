import React, { useState } from 'react';
import "../css/Dashboard.css";

import pic from "../img/pic.jpg";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Dashboard() {
  const [value, onChange] = useState(new Date());
  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>
      <div className='left'></div>
      <div className='right'>
        <div className='right-top'>
          <div className='r_t_l'>
            <img src={pic} className="pic"></img>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
        </div>
        <div className='right-middle'>
          <Calendar onChange={onChange} value={value} className="calendar" />
        </div>
        <div className='right-bottom'></div>
      </div>
    </div>
  )
}

export default Dashboard