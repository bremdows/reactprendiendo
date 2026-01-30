
export const Square = ({children, isSelected, updateBoard, indice}) => {

  const turnClassName = isSelected ? "square is-selected" : "square"

  function handleClick(){
    updateBoard(indice)
  }

  return (
    <div 
      onClick={handleClick}
      className={turnClassName}
    >
      {children}
    </div>
  )
}

 