import { useState } from 'react'
import { Link } from 'react-router-dom'
import rpsLogo from '../../images/logo.svg'
import rpslsLogo from '../../images/logo-bonus.svg'
import './HomePage.css'

type HomePageProps = {
  setGameMode: (gameMode: string) => void
}

function HomePage({ setGameMode }: HomePageProps) {
  function handleGameModeRPS() {
    setGameMode('RPS')
  }

  function handleGameModeRPSLS() {
    setGameMode('RPSLS')
  }
  return (
    <div className="home--page">
      <Link to="/rps">
        <button onClick={handleGameModeRPS}>
          <img src={rpsLogo} alt="rock paper scissors logo" />
        </button>
      </Link>
      <Link to="/rpsls">
        <button onClick={handleGameModeRPSLS}>
          <img
            src={rpslsLogo}
            alt="rock paper scissors lizard spock logo"
          />
        </button>
      </Link>
    </div>
  )
}

export default HomePage
