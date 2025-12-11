import './App.css'

export function App() {
    return (
        <article 
            style={{display:'flex', alignItems:'center'}}
            className='br-followCard'
        >
            <header className='br-followCard-header'>
                <img src="https://unavatar.io/x/bremdows" alt="Logo marca" className='br-followCard-avatar'/>
                <div className='br-followCard-info'>
                    <strong className='br-followCard-infoUserName'>Bremdow Salazar Roa</strong>
                    <span>@bremdows_dev</span>
                </div>
            </header>

            <aside>
                <button className='br-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}