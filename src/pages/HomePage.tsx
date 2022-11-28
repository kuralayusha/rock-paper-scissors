import { useState } from 'react'
import { Link } from 'react-router-dom'

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
    <div>
      <h1>Home Page</h1>
      <Link to="/rps">
        <button onClick={handleGameModeRPS}>RPS</button>
      </Link>
      <Link to="/rpsls">
        <button onClick={handleGameModeRPSLS}>RPSLS</button>
      </Link>
    </div>
  )
}

export default HomePage
