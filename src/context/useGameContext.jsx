import React, { useState, useContext, createContext } from 'react';

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const newGame = new Array(9)
    .fill('')
    .map((val, i) => ({ position: i, content: '' }));

  const [board, setBoard] = useState(newGame);
  const [player, setPlayer] = useState('x');
  const [message, setMessage] = useState('your turn, x');
  const [active, setActive] = useState(true);

  const handleClick = (n) => {
    if (!active) return;
    if (board[n].content !== '') return;

    setBoard((i) =>
      i.map((square) => (square.position === n ? { position: n, content: setPlayer } : square))
    );
    setPlayer(player === 'x' ? 'o' : 'x');
    setMessage(player === 'x' ? 'your turn, o' : 'your turn, x');
  };

  function checkWinner() {
    if (
      board[0].content !== '' &&
      board[0].content === 
      board[1].content &&
      board[1].content === 
      board[2].content
    ) {
      return board[2].content;
    } else if (
      board[3].content !== '' &&
      board[3].content === 
      board[4].content &&
      board[4].content === 
      board[5].content
    ) {
      return board[5].content;
    } else if (
      board[6].content !== '' &&
      board[6].content === 
      board[7].content &&
      board[7].content === 
      board[8].content
    ) {
      return board[8].content;
    } else if (
      board[0].content !== '' &&
      board[0].content === 
      board[3].content &&
      board[3].content === 
      board[6].content
    ) {
      return board[6].content;
    } else if (
      board[1].content !== '' &&
      board[1].content === 
      board[4].content &&
      board[4].content === 
      board[7].content
    ) {
      return board[7].content;
    } else if (
      board[2].content !== '' &&
      board[2].content === 
      board[5].content &&
      board[5].content === 
      board[8].content
    ) {
      return board[8].content;
    } else if (
      board[0].content !== '' &&
      board[0].content === 
      board[4].content &&
      board[4].content === 
      board[8].content
    ) {
      return board[8].content;
    } else if (
      board[2].content !== '' &&
      board[2].content === 
      board[4].content &&
      board[4].content === 
      board[6].content
    ) {
      return board[6].content;
    } else {
      return false;
    }
  }

  const catsGame = () => {
    return board.filter((square) => square.content === '').length === 0;
  };

  const checkGame = () => {
    if (!active) return;
    const winner = checkWinner();
    if (winner) {
      setMessage(`you win, ${winner}`);
      setActive(false);
    } else if (catsGame()) {
      setMessage('cats game!');
      setActive(false);
    }
  };

  checkGame();

  const resetGame = () => {
    setBoard(newGame);
    setActive(true);
    setMessage('your turn, x');
    setPlayer('x');
  };

  return (
    <GameContext.Provider value={{ board, player, message, active, handleClick, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameContextProvider');
  }
  return context;
};

export { useGameContext, GameContextProvider };