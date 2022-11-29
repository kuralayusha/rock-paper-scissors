import { Link } from 'react-router-dom'

type GamePauseProps = {
  setPause: (pause: boolean) => void
}

function GamePause({ setPause }: GamePauseProps) {
  function handleResumeGame() {
    setPause(false)
  }
  return (
    <div className="game--pause">
      <button onClick={handleResumeGame}>Resume</button>
      <button>
        <Link to="/">Main Menu</Link>
      </button>
    </div>
  )
}

export default GamePause
