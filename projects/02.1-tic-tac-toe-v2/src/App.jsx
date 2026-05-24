import { useState } from 'react'
import confetti from 'canvas-confetti'

import {Square} from './components/Square'
import { checkWinner, checkEndGame } from './logic/logica'
import {TURNS} from './constants/constans.js'

import './App.css'
import { WinnerModal } from './components/WinnerModal.jsx'



function App(){
  // Estados de juego
  const [board, setBoard] =  useState(
    Array(9).fill(null)
  )
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  

  const updateBoard = (index) => {

    // No actulizar si existe un elemento en Square o si ya existe un ganador
    if(board[index] || winner ) return

    // Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Verificar si existe un ganador
    // Se utiliza newBoard porque es el tablero que tiene la versión más actualizada del estado del tablero
    const newWinner = checkWinner(newBoard)

    if(newWinner){
      // El tablero no se actualiza en tiempo real, es asincrono (no bloquea el còdigo que viene despues) y las actualizaciones de estado no ocurren en tiempo real

      /**
       * Esto es que si se tiene:
       * setWinner(nenWinner)
       * winner puede o no tener el nuevo estado actualizado (no se sabe)
       * console.log(winner)
       */
      confetti()
      setWinner(newWinner)
      console.log(`El ganador es: ${newWinner}`)
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
  
  // useState permite gestionar el estado de una variable para poder modificar un componente, su uso esta en el re-renderizado cuando se detecta de un cambio.  

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reiniciar juego</button>
      <section className="game">
       {
         board.map( (square, index) => {
          return (
            <Square 
              key={index}
              index={index}
              // updateBoard es una función
              updateBoard={updateBoard}
            >
              {square}
              {/* {board[index]} */}
            </Square>
          )
        })
       }
      </section>
      
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X} 
        </Square>

        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
            
    </main>
  )
}

export default App