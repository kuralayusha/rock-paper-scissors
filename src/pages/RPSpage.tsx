import ScoreBoard from '../components/ScoreBoard'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

type RPSpageProps = {
  gameMode: string
  setGameMode: (gameMode: string) => void
}

function RPSpage({ gameMode, setGameMode }: RPSpageProps) {
  useEffect(() => {
    setGameMode('RPS')
    console.log('setting game mode to RPS')
  }, [])

  return (
    <>
      {gameMode === 'RPS' ? (
        <div>
          <h1>Rock Paper Scissors</h1>
          <ScoreBoard gameMode={gameMode} />
        </div>
      ) : (
        <div>
          Error: you have to select a <Link to="/">game mode</Link>
        </div>
      )}
    </>
  )
}

export default RPSpage

/* TODO: topBar -> game mod logo and score board
-> onclick to scoreBoard game pause and asks to 
resume to main menu

Select icon screen -> backgrond img and icons

game screen -> players pick and cpu pick

Result animation -> winners got an animation then
popus a title "You win or You Lose" and a button for 
play again 

Rules component -> shows the rules*/
