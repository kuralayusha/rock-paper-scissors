import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RPSLSpage from './pages/RPSLSpage'
import RPSpage from './pages/RPSpage'

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
            element={<RPSpage gameMode={gameMode} />}
          />
          <Route
            path="/rpsls"
            element={<RPSLSpage gameMode={gameMode} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
