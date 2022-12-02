import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/main_menu/HomePage'
import RPSLSpage from './pages/rpsls/RPSLSpage'
import RPSpage from './pages/rps/RPSpage'

function App() {
  const [gameMode, setGameMode] = useState('')
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage setGameMode={setGameMode} />}
          />
          <Route
            path="/rps"
            element={
              <RPSpage
                gameMode={gameMode}
                setGameMode={setGameMode}
              />
            }
          />
          <Route
            path="/rpsls"
            element={
              <RPSLSpage
                gameMode={gameMode}
                setGameMode={setGameMode}
              />
            }
          />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
