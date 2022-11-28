import ScoreBoard from '../components/ScoreBoard'
import SelectIcon from '../components/SelectIcon'
import PlayerVsCpu from '../components/PlayerVsCpu'
import Rules from '../components/Rules'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

type RPSpageProps = {
  gameMode: string
  setGameMode: (gameMode: string) => void
}

function RPSpage({ gameMode, setGameMode }: RPSpageProps) {
  const [playerPick, setPlayerPick] = useState<any>('')
  const [cpuPick, setCpuPick] = useState<any>('')
  const [playerScore, setPlayerScore] = useState(0)
  const [isPlayerWinner, setIsPlayerWinner] = useState<
    boolean | string | null
  >(null)
  const [showRules, setShowRules] = useState(false)

  useEffect(() => {
    setGameMode('RPS')
    console.log('setting game mode to RPS')
  }, [])

  if (playerPick !== '' && cpuPick === '') {
    const cpuPicks = ['rock', 'paper', 'scissors']
    const randomPick =
      cpuPicks[Math.floor(Math.random() * cpuPicks.length)]
    setCpuPick(randomPick)
  }

  // check the winner and set the score board accordingly
  // rock beats scissors
  // scissors beats paper
  // paper beats rock
  // if player wins add 1 to player score if cpu wins remove 1
  // from players score
  useEffect(() => {
    if (playerPick !== '' && cpuPick !== '') {
      if (
        (playerPick === 'rock' && cpuPick === 'scissors') ||
        (playerPick === 'scissors' && cpuPick === 'paper') ||
        (playerPick === 'paper' && cpuPick === 'rock')
      ) {
        setPlayerScore(playerScore + 1)
        setTimeout(() => {
          setIsPlayerWinner(true)
        }, 1000)
      } else if (playerPick === cpuPick) {
        setTimeout(() => {
          setIsPlayerWinner('draw')
        }, 1000)
      } else {
        setPlayerScore(playerScore - 1)
        setTimeout(() => {
          setIsPlayerWinner(false)
        }, 1000)
      }
    }
  }, [playerPick, cpuPick])

  //   shows the rules for the game
  function handleShowRules() {
    setShowRules(true)
  }

  console.log({ playerPick }, { cpuPick }, playerScore)

  return (
    <>
      {gameMode === 'RPS' ? (
        <div>
          <h1>Rock Paper Scissors</h1>
          <ScoreBoard gameMode={gameMode} playerScore={playerScore} />
          {!playerPick ? (
            <SelectIcon
              setPlayerPick={setPlayerPick}
              gameMode={gameMode}
            />
          ) : (
            <PlayerVsCpu
              playerPick={playerPick}
              cpuPick={cpuPick}
              isPlayerWinner={isPlayerWinner}
              setPlayerPick={setPlayerPick}
              setCpuPick={setCpuPick}
              setIsPlayerWinner={setIsPlayerWinner}
            />
          )}
          <button onClick={handleShowRules}>Rules</button>
          {showRules && <Rules setShowRules={setShowRules} />}
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
