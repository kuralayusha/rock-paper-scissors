type winnerProps = {
  isPlayerWinner: boolean | string | null
  handlePlayAgain: () => void
}

function Winner({ isPlayerWinner, handlePlayAgain }: winnerProps) {
  console.log(isPlayerWinner)

  return (
    <div className="winner">
      {isPlayerWinner === true ? (
        <>
          <h1>You win</h1>
          <button onClick={handlePlayAgain}>again</button>
        </>
      ) : isPlayerWinner === false ? (
        <>
          <h1>You Lose</h1>
          <button onClick={handlePlayAgain}>again</button>
        </>
      ) : isPlayerWinner === 'draw' ? (
        <>
          <h1>Draw</h1>
          <button onClick={handlePlayAgain}>again</button>
        </>
      ) : null}
    </div>
  )
}

export default Winner
