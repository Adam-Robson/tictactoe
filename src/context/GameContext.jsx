import { createContext, useContext, useState} from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {

  const [player, setPlayer] = useState('xd');
  const [live, setLive] = useState(true);
  const [message, setMessage] = useState('your move: ' + player);
  const [board, setBoard] = useState(new Array(9).fill(''));
  

  const yourMove = (i) => {
    if (board[i] === '' && live) {
      setBoard(state => state.map((x, y) => y === i ? player : x));
      setPlayer(state => state === 'x' ? 'o' : 'x');
    }
  }

  const gameOver = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
  ];

  const checkWin = () => {
   if (!live) return null;
    let allSquares = false;
   if (!board.includes('')) {
    allSquares === true
   }
  }

   let winner = null;

   for (let win of gameOver) {
    let row = board.filter((square, i) => win.includes(i));
    if (row.includes('')) continue;

    winner = row.reduce((x, y) => {
      if (x === y) {
        return x}
      });

    if (winner) {
      setLive === false;
      setMessage(`${winner} won`);
    } else if (allSquares) {
      setLive(false);
      setMessage('cats game')
    }
  }
    checkWin();

    const reset = () => {
      setBoard(newArray(9).fill(''));
      setLive(true);
      setPlayer('x');
    }

    return <GameContext.Provider value={ { player, setPlayer, board, setBoard, message, setMessage, yourMove, reset, checkWin } }>{ children }</GameContext.Provider>;

  }

  const useGameContext = () => {
    const context = useContext(GameContext);
    return context;
  }

  export { GameProvider, useGameContext };
    



    



   