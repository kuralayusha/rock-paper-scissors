import { useState } from 'react'
import GamePause from '../game_pause/GamePause'
import rpsLogo from '../../images/logo.svg'
import rpslsLogo from '../../images/logo-bonus.svg'
import './ScoreBoard.css'

type ScoreBoardProps = {
  gameMode: string
  playerScore: number
}

function ScoreBoard({ gameMode, playerScore }: ScoreBoardProps) {
  const [pause, setPause] = useState(false)

  function handlePause() {
    setPause(true)
  }

  return (
    <>
      {gameMode === 'RPS' ? (
        <div className="score--board rps">
          <img src={rpsLogo} alt="" />
          <button onClick={handlePause}>
            <small>SCORE</small>
            <p>{playerScore}</p>
          </button>
        </div>
      ) : gameMode === 'RPSLS' ? (
        <div className="score--board rpsls">
          <img src={rpslsLogo} alt="" />
          <button onClick={handlePause}>
            <small>SCORE</small>
            <p>{playerScore}</p>
          </button>
        </div>
      ) : null}
      {pause && <GamePause setPause={setPause} />}
    </>
  )
}

export default ScoreBoard
