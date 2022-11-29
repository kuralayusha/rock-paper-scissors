import rock from '../../images/icon-rock.svg'
import paper from '../../images/icon-paper.svg'
import scissors from '../../images/icon-scissors.svg'
import lizard from '../../images/icon-lizard.svg'
import spock from '../../images/icon-spock.svg'
import rpsBackground from '../../images/bg-triangle.svg'
import './SelectIcon.css'

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
        <div className="icons--rps">
          <button
            className="rock"
            onClick={(e) => handleSelectingIcon(e)}
          >
            <img src={rock} alt="rock icon" id="rock" />
          </button>
          <button
            className="paper"
            onClick={(e) => handleSelectingIcon(e)}
          >
            <img src={paper} alt="paper icon" id="paper" />
          </button>
          <button
            className="scissors"
            onClick={(e) => handleSelectingIcon(e)}
          >
            <img src={scissors} alt="scissors icon" id="scissors" />
          </button>
        </div>
      ) : (
        <div className="icons--rpsls">
          <button
            className="rock"
            onClick={(e) => handleSelectingIcon(e)}
          >
            <img src={rock} alt="rock icon" id="rock" />
          </button>
          <button
            className="paper"
            onClick={(e) => handleSelectingIcon(e)}
          >
            <img src={paper} alt="paper icon" id="paper" />
          </button>
          <button
            className="scissors"
            onClick={(e) => handleSelectingIcon(e)}
          >
            <img src={scissors} alt="scissors icon" id="scissors" />
          </button>
          <button
            className="lizard"
            onClick={(e) => handleSelectingIcon(e)}
          >
            <img src={lizard} alt="lizard icon" id="lizard" />
          </button>
          <button
            className="spock"
            onClick={(e) => handleSelectingIcon(e)}
          >
            <img src={spock} alt="spock icon" id="spock" />
          </button>
        </div>
      )}
    </>
  )
}

export default SelectIcon
