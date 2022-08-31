// import logo from './logo.svg';
import React from 'react';

import './App.css';
import Navbar from './container/Navbar';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Classroom from "./pages/Classroom";
import Timetable from "./pages/Timetable";
import Notification from "./pages/Notification";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;