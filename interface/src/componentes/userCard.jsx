import './userCard.css'

function UserCard({user}) {

    return (
        <div className='user-card'>
            <img className='user-card-avatar' src={`https://robohash.org/${user._id}`}/>
            <div className='user-card-info'>
                <p>Nome: {user.nome}</p>
                <p>Email: {user.email}</p>
                <p>Idade: {user.idade}</p>
            </div>
        </div>
    )
 
}

export default UserCard