import './App.css'
import { useState, useEffect} from 'react'
import UserCard from './componentes/userCard'
import axios from 'axios'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState()
  const [users, setUsers] = useState([])

  useEffect( () => {
    async function buscarUsuarios(){
      const response = await axios.get('http://localhost:3003/usuarios')

      setUsers(response.data)
    }

    buscarUsuarios()
  }, [])

  async function handleSubmit(event){
    event.preventDefault()

    await axios.post('http://localhost:3003/usuarios', {
      nome: name,
      email,
      idade: age,
    })

    const response = await axios.get('http://localhost:3003/usuarios')
    setUsers(response.data)

    setName("")
    setEmail("")
    setAge("")
  }
  return (
    <div className='app'>
      <h1>Cadastro de Usuários</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Nome'
          value={name}
          onChange={(event => setName(event.target.value))}
          />
        <input 
          type="email"
          placeholder='Email'
          value={email}
          onChange={event => setEmail(event.target.value)}
          />
        <input 
          type="number" 
          placeholder='Idade'
          value={age}
          onChange={event => setAge(event.target.value)}
          />
        <button type='submit'>Cadastrar</button>

      </form>
        <div className='user-list'>
          {users.map((user) => (
          <UserCard key={user._id} user={user}/>
          ))}
        </div>
    </div>
  )
}

export default App
