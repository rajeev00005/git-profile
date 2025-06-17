import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <img
          src="/banner.jpg"
          alt="GitHub Logo"
          width="400"
        />
      </div>
      <h2 className="text-center mb-4 ">GitHub Profile Viewer</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
