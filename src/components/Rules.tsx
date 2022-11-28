type rulesProps = {
  setShowRules: (showRules: boolean) => void
}

function Rules({ setShowRules }: rulesProps) {
  function handleCloseRules() {
    setShowRules(false)
  }

  return (
    <div>
      <h2>Rules</h2>
      <p>
        Rock beats Scissors, Scissors beats Paper, Paper beats Rock.
        If you both pick the same, it's a draw.
      </p>
      <button onClick={handleCloseRules}>X</button>
    </div>
  )
}

export default Rules
