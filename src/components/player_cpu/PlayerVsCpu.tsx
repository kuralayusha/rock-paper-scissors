type PlayerVsCpuProps = {
  cpuPick: string
  playerPick: string
  isPlayerWinner: boolean | string | null
  setPlayerPick: (playerPick: string) => void
  setCpuPick: (cpuPick: string) => void
  setIsPlayerWinner: (isPlayerWinner: boolean | string | null) => void
}

function PlayerVsCpu({
  cpuPick,
  playerPick,
  isPlayerWinner,
  setPlayerPick,
  setCpuPick,
  setIsPlayerWinner,
}: PlayerVsCpuProps) {
  function handlePlayAgain() {
    setPlayerPick('')
    setCpuPick('')
    setIsPlayerWinner(null)
  }

  return (
    <div>
      <h1>Player Pick: {playerPick}</h1>
      <h1>Cpu Pick: {cpuPick}</h1>
      <div>
        {isPlayerWinner === true ? (
          <>
            <h1>Player Wins</h1>
            <button onClick={handlePlayAgain}>again</button>
          </>
        ) : isPlayerWinner === false ? (
          <>
            <h1>CPU Wins</h1>
            <button onClick={handlePlayAgain}>again</button>
          </>
        ) : isPlayerWinner === 'draw' ? (
          <>
            <h1>Draw</h1>
            <button onClick={handlePlayAgain}>again</button>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default PlayerVsCpu
