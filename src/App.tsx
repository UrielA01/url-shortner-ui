import React from 'react';
import './App.css';
import InputBox from './components/InputBox';
import { fetchURL, postURL } from './services/api';

function App() {

  return (
    <div className="App">
      <InputBox />
    </div>
  );
}

export default App;
