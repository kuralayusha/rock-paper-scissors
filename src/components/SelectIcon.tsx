type selectIconProps = {
  setPlayerPick: (playerPick: string) => void
  gameMode: string
}

function SelectIcon({ setPlayerPick, gameMode }: selectIconProps) {
  function handleSelectingIcon(e: any) {
    setPlayerPick(e.target.id)
  }

  return (
    <>
      {gameMode === 'RPS' ? (
        <div>
          <button id="rock" onClick={(e) => handleSelectingIcon(e)}>
            ROCK
          </button>
          <button id="paper" onClick={(e) => handleSelectingIcon(e)}>
            PAPER
          </button>
          <button
            id="scissors"
            onClick={(e) => handleSelectingIcon(e)}
          >
            SCISSORS
          </button>
        </div>
      ) : (
        <div>
          <button id="rock" onClick={(e) => handleSelectingIcon(e)}>
            ROCK
          </button>
          <button id="paper" onClick={(e) => handleSelectingIcon(e)}>
            PAPER
          </button>
          <button
            id="scissors"
            onClick={(e) => handleSelectingIcon(e)}
          >
            SCISSORS
          </button>
          <button id="lizard" onClick={(e) => handleSelectingIcon(e)}>
            LIZARD
          </button>
          <button id="spock" onClick={(e) => handleSelectingIcon(e)}>
            SPOCK
          </button>
        </div>
      )}
    </>
  )
}

export default SelectIcon
