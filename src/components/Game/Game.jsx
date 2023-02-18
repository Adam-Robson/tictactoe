import React, { useState } from 'react';
import { useGameContext } from '../../context/GameContext';
import Board from '../Board/Board';

export default function Game() {

  const { calculateWinner } = useGameContext();

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [step, setStep] = useState(0);
  const [player, setPlayer] = useState(true);
  const winner = calculateWinner(history[step]);

  const handleClick = i => {
    const square = history.slice(0, step + 1);
    const current = square[step];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = player ? 'x' : 'o';
    setHistory([...square, squares]);
    setStep(square.length);
    setPlayer(!player);
  };

  const jumpTo = num => {
    setStep(num);
    setPlayer(num % 2 === 0);
  };

  function renderFn() {
    history.map((item) => {
      const message = item ? `your move ${item}` : 'you win';
      return (
        <li key={ item }>
          <button onClick={ () => jumpTo(item) }>{ message }</button>
        </li>
      );
    });
  }

  return (
    <>
      <Board squares={ history[step] } onClick={ handleClick } />
      <section className="message">
        { renderFn() }
        { winner ? `${winner} is winner, woo!` : 'your move: ' + (player ? 'x' : 'o') }
      
      </section>
    </>
  );
}
