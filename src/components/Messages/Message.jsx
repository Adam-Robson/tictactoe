import React from 'react';
import { useGameContext } from '../../context/useGameContext';

const Message = () => {
  const { message } = useGameContext();
  return (
    <>
      <div className="message">{ message }</div>
    </>
  );
};

export default Message;