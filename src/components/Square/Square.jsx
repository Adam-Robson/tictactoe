import { useGameContext } from '../../context/useGameContext';
import './Square.css';

export default function Square({ position, content }) {
  const { handleClick } = useGameContext();
  return (
    <div onClick={() => handleClick(position)} id={ position } className="square">{ content }</div>
  );
}
