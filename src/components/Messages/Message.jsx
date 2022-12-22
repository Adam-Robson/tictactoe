import { useGameContext } from '../../context/useGameContext';

export default function Message() {
  const { message } = useGameContext();
  return (
    <div className="message">
      <p>{message}</p>
    </div>
  );
}