import './App.css'
import './font-style.css'

 export function CardSell({children, idImage, price, category, language, isliked}){

    return(
        <article className="card-sell">
            <img className="card-image" src={idImage} alt={`Imagen {idImage} no encontrada`} />
            <div className="card-content">
                <h3 className="card-content-title">{children}</h3>
                <span className="card-content-category">{category}</span>
                <div className="card-content-price">
                    <p> <span className="icon-buy"></span> from <strong>{price}</strong> </p>
                    <p> <span className="icon-plane"></span> in {language} </p>
                </div>
                <div className="card-button">
                    <button className="card-button-booking">Booking Event</button>
                    <button className="card-button-like"> <span className="icon-heart"></span> </button>
                </div>
            </div>
        </article>
    )
}