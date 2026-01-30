import { useState } from 'react'
import confetti from 'canvas-confetti'
// import {Square} from './components/Square.jsx'
import {Square} from './components/Square.jsx'
import {TURNS, WINNER_COMBO} from './constants/constantes.js'
// import {} from './'


import './App.css'

// Así se pueden ir importando imágenes
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'



function App() {
  
  // Definir un arreglo de 9 elementos y completarlos con null y establecerlo como el estado inicial
  const [board, setBoard] = useState(Array(9).fill(null))
  // Array(9).fill(null)
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBO){
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
      
    } 
  }
  
  const checkEndGame = (newBoard) => {
    return newBoard.every( (square) => square !== null)
  }

  const updateBoard = (indice) => {
    // Evitar sobreescribir
    if (board[indice] || winner) return
    
    // Actualizar el tablero
    const newBoard = [...board]
    newBoard[indice] = turn
    setBoard(newBoard)
    
    // Actualizar el turno
    const newTurn = turn === TURNS.X ? TURNS.O :  TURNS.X
    setTurn(newTurn)

    // Verificar el ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner){

      confetti()
      setWinner(newWinner) // Estos son eventos asincronos por lo que las variables no se actualizan en el orden de ejecución
      // * POR LO TANTO AL MOSTRAR EL VALOR DE WINNER (QUE DEBIO ACTUALIZARSE) MUESTRA EL VALOR DE NULL (VALOR INICIAL) PORQUE LOS CAMBIOS NO SON INMEDIATOS 
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setWinner(null)
    setTurn(TURNS.X)
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                indice={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
              // <div className="cell" key={index}>
              //   <span className="cell__content">
              //     {index}
              //   </span>
              // </div>
            )
          })
        }
      </section>
      <section className="turn">
        <Square
          isSelected={turn === TURNS.X}
        >
          {TURNS.X}
        </Square>

        <Square
          isSelected={turn === TURNS.O}
        >
          {TURNS.O}
        </Square>
      </section>

      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false
                    ? 'Empate' 
                    : 'Gano:'
                }
              </h2>

              <header className="win">
                {
                  winner && <Square> {winner} </Square>
                }
              </header>
              <footer>
                <button onClick={resetGame}> Empezar de nuevo </button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App