import React from 'react';

import { useGameContext } from '../../context/GameContext';

import './Message.css';

const Message = () => {
  const { message } = useGameContext();
  return (
    <div className="message">
      <p>{ message }</p>
    </div>
  );
};

export default Message;