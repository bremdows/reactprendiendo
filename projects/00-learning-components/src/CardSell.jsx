import './App.css'

export function CardSell({idImage, title, userName, category}){
    return(
        <article className="card-sell">
            <figure>
                <img src={idImage} alt={`Imagen {idImage} no encontrada`} />
            </figure>
            <div className="card-content">
                <h3 className="card-content-title">{title}</h3>
                <p className="card-content-name">{userName}</p>
                <span className="card-category">{category}</span>
            </div>
            <footer>
                <div>
                    <span class="card-footer-like">
                        <img src="./assets/like.svg" alt="" />
                    </span>
                    <span className="card-footer-views"></span>
                </div>
                <div>
                    <span className="card-footer-booking"></span>
                </div>
            </footer>
        </article>
    )
}