import React from 'react';
import Square from '../Square/Square';
import './Board.css';

export default function Board({ squares, onClick }) {
  return (
    <>
      <section className="board-container">
        <div className="board">
          { squares.map((square, i) => (
            <Square key={ i } value={ square } onClick={ () => onClick(i) } />
          )) 
          }
        </div>
      </section>
    </>
  );
}

