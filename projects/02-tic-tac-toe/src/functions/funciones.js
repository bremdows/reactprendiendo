import { WINNER_COMBO } from "../constants/constantes"
export const checkWinner = (boardToCheck) => {
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

  export  const checkEndGame = (newBoard) => {
    return newBoard.every( (square) => square !== null)
  }