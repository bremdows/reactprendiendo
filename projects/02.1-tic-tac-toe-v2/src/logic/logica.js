import { WINNER_COMBOS } from "../constants/constans"

export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if(
        boardToCheck[a] && // Verifica que el 1er elemento no se encuentre vacio
        boardToCheck[a] === boardToCheck[b] && // Verifica 1er elemento = al 2do
        boardToCheck[a] === boardToCheck[c] // Verifica 1er elemento = al 3ro
      ){
        return boardToCheck[a] // x u o
      }
    }
    return null
  }
  // Revisa todas las casillas del tablero y si todas (every) son diferentes de null, el juego a finalizado y se tiene un empate
export const checkEndGame = (newBoard) => {
// .every retorna true o false
return newBoard.every( (square) => square !== null)
}