import { useState } from 'react'
import rpsLogo from '../../images/logo.svg'
import rpslsLogo from '../../images/logo-bonus.svg'
import './ScoreBoard.css'

type ScoreBoardProps = {
  gameMode: string
  playerScore: number
}

function ScoreBoard({ gameMode, playerScore }: ScoreBoardProps) {
  return (
    <>
      {gameMode === 'RPS' ? (
        <div className="score--board rps">
          <img src={rpsLogo} alt="" />
          <button>
            <small>SCORE</small>
            <p>{playerScore}</p>
          </button>
        </div>
      ) : gameMode === 'RPSLS' ? (
        <div className="score--board rpsls">
          <img src={rpslsLogo} alt="" />
          <button>
            <small>SCORE</small>
            <p>{playerScore}</p>
          </button>
        </div>
      ) : null}
    </>
  )
}

export default ScoreBoard
