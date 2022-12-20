import React from 'react';

import { useGameContext } from '../../context/useGameContext';

import './Square.css';

const Square = ({ position, content }) => {
  const { handleClick } = useGameContext();
  return (
    <div onClick={ () => handleClick(position) } id={ position } className="square">{ content }</div>
  );
};

export default Square;
