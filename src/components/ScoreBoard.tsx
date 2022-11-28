import { useState } from 'react'
import GamePause from './GamePause'

type ScoreBoardProps = {
  gameMode: string
}

function ScoreBoard({ gameMode }: ScoreBoardProps) {
  const [pause, setPause] = useState(false)

  function handlePause() {
    setPause(true)
  }

  return (
    <div className="score--board" onClick={handlePause}>
      {gameMode === 'RPS' ? (
        <div className="s-b rps">
          <h1>rps scoreBoard</h1>
        </div>
      ) : (
        <div className="s-b rpsls">
          <h1>rpsls scoreBoard</h1>
        </div>
      )}
      {pause && <GamePause />}
    </div>
  )
}

export default ScoreBoard
