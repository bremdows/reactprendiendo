import { useState } from 'react'
import confetti from 'canvas-confetti'
// import {Square} from './components/Square.jsx'
import {Square} from './components/Square.jsx'
import { WinnerModal } from './components/WinnerModal.jsx'
import {TURNS} from './constants/constantes.js'
import { checkWinner, checkEndGame } from './functions/funciones.js'
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

      <WinnerModal winner={winner} resetGame={resetGame}/>
      
    </main>
  )
}

export default App