import React from 'react';

import Board from './components/Board/Board';
import Message from './components/Messages/Message';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>xoxo</h1>
      <Message />
      <Board />
    </div>
  );
};

export default App;
