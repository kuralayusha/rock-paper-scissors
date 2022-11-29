import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/main_menu/HomePage'
import RPSLSpage from './pages/rpsls/RPSLSpage'
import RPSpage from './pages/rps/RPSpage'

function App() {
  const [gameMode, setGameMode] = useState('')
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  )
}

export default App
