type rulesProps = {
  setShowRules: (showRules: boolean) => void
  gameMode: string
}

function Rules({ setShowRules, gameMode }: rulesProps) {
  function handleCloseRules() {
    setShowRules(false)
  }

  return (
    <div>
      <h2>Rules</h2>

      {gameMode === 'RPS' ? (
        <p>
          Rock beats Scissors, Scissors beats Paper, Paper beats Rock.
          If you both pick the same, it's a draw.
        </p>
      ) : (
        <p>
          -rock beats scissors -rock beats lizard -lizard beats spock
          -lizard beats paper -spock beats scissors -spock beats rock
          -scissors beats paper -scissors beats lizard -paper beats
          rock -paper beats spock -If you both pickthe same, it's a
          draw.
        </p>
      )}

      <button onClick={handleCloseRules}>X</button>
    </div>
  )
}

export default Rules
