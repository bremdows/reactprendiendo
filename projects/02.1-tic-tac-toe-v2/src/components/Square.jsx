export const Square = ({children, updateBoard, index, isSelected}) => {

  // Condicional para activar y desactivar clases
  const className = `square ${isSelected ? "is-selected" : ""}`

  const handleClick = () =>{
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}