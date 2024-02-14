import { useState } from 'react'
import './App.css' 
import GameBoard from './components/GameBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>
      Tic-Tac-Toe
    </h1>
    <GameBoard >
      
    </GameBoard>
    </>
  )
}

export default App
