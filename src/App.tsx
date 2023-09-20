import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import InputBox from './components/InputBox';
import ShortUrlRedirect from './components/ShortUrlRedirect';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<InputBox />} />
          <Route path="/:shortId" element={<ShortUrlRedirect />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;