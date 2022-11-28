import ScoreBoard from '../components/ScoreBoard'

type RPSLSpageProps = {
  gameMode: string
}

function RPSLSpage({ gameMode }: RPSLSpageProps) {
  return (
    <div className="RPSLSpage">
      <h1>Rock Paper Scissors Lizard Spock</h1>
      <ScoreBoard gameMode={gameMode} />
    </div>
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
