import ScoreBoard from '../../components/score_board/ScoreBoard'
import SelectIcon from '../../components/select_icon/SelectIcon'
import PlayerVsCpu from '../../components/player_cpu/PlayerVsCpu'
import Rules from '../../components/rules/Rules'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

type RPSLSpageProps = {
  gameMode: string
  setGameMode: (gameMode: string) => void
}

function RPSLSpage({ gameMode, setGameMode }: RPSLSpageProps) {
  const [playerPick, setPlayerPick] = useState<any>('')
  const [cpuPick, setCpuPick] = useState<any>('')
  const [playerScore, setPlayerScore] = useState(0)
  const [isPlayerWinner, setIsPlayerWinner] = useState<
    boolean | string | null
  >(null)
  const [showRules, setShowRules] = useState(false)

  useEffect(() => {
    setGameMode('RPSLS')
    console.log('setting game mode to RPS')
  }, [])

  if (playerPick !== '' && cpuPick === '') {
    const cpuPicks = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    const randomPick =
      cpuPicks[Math.floor(Math.random() * cpuPicks.length)]
    setCpuPick(randomPick)
  }

  // check the winner and set the score board accordingly
  // rock beats scissors
  // rock beats lizard
  // lizard beats spock
  // lizard beats paper
  // spock beats scissors
  // spock beats rock
  // scissors beats paper
  // scissors beats lizard
  // paper beats rock
  // paper beats spock
  // if players pick is the same as cpu pick then its a draw
  // if player wins add 1 to player score if cpu wins remove 1 from players score
  useEffect(() => {
    if (playerPick !== '' && cpuPick !== '') {
      if (
        (playerPick === 'rock' && cpuPick === 'scissors') ||
        (playerPick === 'rock' && cpuPick === 'lizard') ||
        (playerPick === 'lizard' && cpuPick === 'spock') ||
        (playerPick === 'lizard' && cpuPick === 'paper') ||
        (playerPick === 'spock' && cpuPick === 'scissors') ||
        (playerPick === 'spock' && cpuPick === 'rock') ||
        (playerPick === 'scissors' && cpuPick === 'paper') ||
        (playerPick === 'scissors' && cpuPick === 'lizard') ||
        (playerPick === 'paper' && cpuPick === 'rock') ||
        (playerPick === 'paper' && cpuPick === 'spock')
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

  console.log({ playerPick }, { cpuPick }, playerScore)
  return (
    <>
      {gameMode === 'RPSLS' ? (
        <div className="RPSLSpage">
          <h1>Rock Paper Scissors Lizard Spock</h1>
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
          <button onClick={() => setShowRules(!showRules)}>
            Rules
          </button>
          {showRules && (
            <Rules setShowRules={setShowRules} gameMode={gameMode} />
          )}
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
