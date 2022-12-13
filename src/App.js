import React from 'react';

import Board from './components/Board/Board';
import Message from './components/Messages/Message';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1 className="title">xoxo</h1>
        <p className="message"><Message /></p>
      </div>
      <main className="main">
        <Board />
      </main>
    </div>
  );
};

export default App;
