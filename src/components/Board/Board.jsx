import { useGameContext } from '../../context/useGameContext';
import Square from '../Square/Square';
import './Board.css';

export default function Board() {
  const { board, resetGame, active } = useGameContext();

  const handleReset = () => {
    resetGame();
  };

  return (
    <>
      <div className="board">
        {board.map(({ position, content }) => (
          <Square key={ position } position={ position } content={ content } />
        ))}
      </div>
      {!active && <button onClick={handleReset}>RESET</button>}
    </>
  );
}
