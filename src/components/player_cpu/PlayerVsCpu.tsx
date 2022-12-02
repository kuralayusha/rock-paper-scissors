import rock from '../../images/icon-rock.svg'
import paper from '../../images/icon-paper.svg'
import scissors from '../../images/icon-scissors.svg'
import lizard from '../../images/icon-lizard.svg'
import spock from '../../images/icon-spock.svg'
import './PlayerVsCpu.css'
import Winner from '../winner/Winner'

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
    <div className="PvC">
      <div className="PvC--container">
        <div className="PvC--icons">
          <div className="player--pics">
            {playerPick === 'rock' ? (
              <button className="rock">
                <img src={rock} />
              </button>
            ) : playerPick === 'paper' ? (
              <button className="paper">
                <img src={paper} />
              </button>
            ) : playerPick === 'scissors' ? (
              <button className="scissors">
                <img src={scissors} />
              </button>
            ) : playerPick === 'lizard' ? (
              <button className="lizard">
                <img src={lizard} />
              </button>
            ) : playerPick === 'spock' ? (
              <button className="spock">
                <img src={spock} />
              </button>
            ) : (
              <div />
            )}
            <h1>You Picked</h1>
          </div>

          <div className="cpu--pics">
            {cpuPick === 'rock' ? (
              <button className="rock">
                <img src={rock} />
              </button>
            ) : cpuPick === 'paper' ? (
              <button className="paper">
                <img src={paper} />
              </button>
            ) : cpuPick === 'scissors' ? (
              <button className="scissors">
                <img src={scissors} />
              </button>
            ) : cpuPick === 'lizard' ? (
              <button className="lizard">
                <img src={lizard} />
              </button>
            ) : cpuPick === 'spock' ? (
              <button className="spock">
                <img src={spock} />
              </button>
            ) : !cpuPick ? (
              <button className="empty--cpu--icon">
                <img />
              </button>
            ) : null}
            <h1>The House Picked</h1>
          </div>
        </div>
        <Winner
          isPlayerWinner={isPlayerWinner}
          handlePlayAgain={handlePlayAgain}
        />
      </div>
    </div>
  )
}

{
}
export default PlayerVsCpu
