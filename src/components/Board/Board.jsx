import { useGameContext } from '../../context/GameContext';
import Square from '../Square/Square';

import './Board.css';

const Board = () => {
  const { board, resetGame, active } = useGameContext();
  const handleReset = () => {
    resetGame();
  };
  return (
    <>
      <div className="board">{
        board.map(({ position, content }) => (
          <Square key={position} position={position} content={content} />
        ))}
      </div>
      {
        !active && <button id="reset" onClick={handleReset}>RESET</button>}
    </>
  );
};

export default Board;