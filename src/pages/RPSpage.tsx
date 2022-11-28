import ScoreBoard from '../components/ScoreBoard'

type RPSpageProps = {
  gameMode: string
}

function RPSpage({ gameMode }: RPSpageProps) {
  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <ScoreBoard gameMode={gameMode} />
    </div>
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
