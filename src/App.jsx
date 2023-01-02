import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [users, setUsers] = useState()

  const getAllUsers = () => {
    const URL = "http://users-crud.academlo.tech/users/"

    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
    
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  
  const createUser = (data) => {
    const URL = "http://users-crud.academlo.tech/users/"
    console.log(data)
    axios.post(URL, data)
      .then(res => getAllUsers())
      .catch(err => console.log(err)) 
  }

  console.log(users)
  return (
    <div className="App">
      <h1>Users</h1>
      <button>OPEN FORM</button>
      <div className="form-container">
        < FormUser
          createUser={createUser}
        />
      </div>

      <div className="card-container">
        {
          users?.map(user => (
            < UserCard
              user={user}
              key={user.id}
              getAllUsers={getAllUsers}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
