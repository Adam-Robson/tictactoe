import { useGameContext } from '../../context/GameContext';
import Square from '../Square/Square';

import './Board.css';

const Board = () => {

  const { board, reset, live } = useGameContext();

  const handleReset = () => reset();

  return (
    <>
      <div className="board">{
        board.map(({ i, sign }) => (
          <Square key={i} position={i} content={sign} />
        ))}
      </div>
      { !live && <button id="reset" onClick={handleReset}>RESET</button> }
    </>
  );
};

export default Board;
