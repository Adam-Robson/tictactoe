import React from 'react';

import { useGameContext } from '../../context/GameContext';

import './Square.css';

const Square = ({ i, sign }) => {
  

  const { yourMove } = useGameContext;

  function handleTurn() {
    yourMove(i);
  };

  return (
    <div onClick={ handleTurn } className="square">{ sign }</div>
  );
};

export default Square;
