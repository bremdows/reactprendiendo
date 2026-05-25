export function saveStorage(board, turn){
    // Guardar el estado en localStorage
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', JSON.stringify(turn))

}


export function resetFromStorage(){
    // Borrar las variables del localStorage
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}