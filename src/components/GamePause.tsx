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
      <button>Main Menu</button>
    </div>
  )
}

export default GamePause
