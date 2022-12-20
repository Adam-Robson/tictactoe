import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { GameContextProvider } from './context/useGameContext';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameContextProvider>
      <App />
    </GameContextProvider>
  </React.StrictMode>
);
