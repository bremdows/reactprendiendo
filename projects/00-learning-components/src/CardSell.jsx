import './App.css'

 export function CardSell({children, idImage, price, category, language}){
    return(
        <article className="card-sell">
            <img className="card-image" src={idImage} alt={`Imagen {idImage} no encontrada`} />
            <div className="card-content">
                <h3 className="card-content-title">{children}</h3>
                <span className="card-content-category">{category}</span>
                <div className="card-content-price">
                    <span> from {price} </span>
                    <span> in {language} </span>
                </div>
                <div className="card-button">
                    <button className="card-button-booking">Booking Event</button>
                    <button className="card-button-like"> Hearth Icon </button>
                </div>
            </div>
        </article>
    )
}