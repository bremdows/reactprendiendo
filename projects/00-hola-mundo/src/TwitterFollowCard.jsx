import './App.css'
export function TwitterFollowCard({userName, name, isFollowing, formatUserName}){
    console.log(isFollowing)
    return(
        <article 
            // style={{display:'flex', alignItems:'center'}}
            className='br-followCard'
        >
            <header className='br-followCard-header'>
                <img src={`https://unavatar.io/x/${userName}`} alt="Logo marca" className='br-followCard-avatar'/>
                <div className='br-followCard-info'>
                    <strong className='br-followCard-infoUserName'>{name}</strong>
                    <span>{formatUserName}</span>
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