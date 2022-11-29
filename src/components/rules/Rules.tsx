import rpsRules from '../../images/image-rules.svg'
import rpslsRules from '../../images/image-rules-bonus.svg'
import cancle from '../../images/icon-close.svg'
import './Rules.css'

type rulesProps = {
  setShowRules: (showRules: boolean) => void
  gameMode: string
}

function Rules({ setShowRules, gameMode }: rulesProps) {
  function handleCloseRules() {
    setShowRules(false)
  }

  return (
    <div className="rules--container">
      <h1>RULES</h1>
      {gameMode === 'RPS' ? (
        <img src={rpsRules} alt="rps rules" />
      ) : (
        <img src={rpslsRules} alt="rpsls rules" />
      )}
      <button onClick={handleCloseRules}>
        <img src={cancle} alt="" />
      </button>
    </div>
  )
}

export default Rules
