import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className='app'>
            <TwitterFollowCard 
             formatUserName={formatUserName}
             userName="bremdows_dev" 
             name="Davis Bremdow Salazar Roa" 
             isFollowing={true}/>

            <TwitterFollowCard 
             formatUserName={formatUserName}
             userName="x" name="Ruth Espino Puma" 
             isFollowing={false}/>

            <TwitterFollowCard 
             formatUserName={formatUserName}
             userName="bremdows_dev" 
             name="Davis Bremdow Salazar Roa" 
             isFollowing/>

            <TwitterFollowCard 
             formatUserName={formatUserName}
             userName="youtube"
             name="Youtube" />
        </section>
    )
}
