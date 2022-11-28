import ScoreBoard from '../components/ScoreBoard'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

type RPSLSpageProps = {
  gameMode: string
  setGameMode: (gameMode: string) => void
}

function RPSLSpage({ gameMode, setGameMode }: RPSLSpageProps) {
  useEffect(() => {
    setGameMode('RPSLS')
    console.log('setting game mode to RPS')
  }, [])
  return (
    <>
      {gameMode === 'RPSLS' ? (
        <div className="RPSLSpage">
          <h1>Rock Paper Scissors Lizard Spock</h1>
          <ScoreBoard gameMode={gameMode} />
        </div>
      ) : (
        <div>
          this is a error you have to select a{' '}
          <Link to="/">game mode</Link>
        </div>
      )}
    </>
  )
}

export default RPSLSpage

/* TODO: topBar -> game mod logo and score board
-> onclick to scoreBoard game pauses and asks to 
resume to main menu

Select icon screen -> backgrond img and icons

game screen -> players pick and cpu pick

result animation -> winners got an animation then
popus a title "You win or You Lose" and a button for 
play again */
