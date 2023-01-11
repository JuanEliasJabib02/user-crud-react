import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()

  const [openForm, setOpenForm] = useState(false)
  const getAllUsers = () => {
    const URL = "http://users-crud.academlo.tech/users/"

    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
    
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const updateUserById = (data) => {
    const id = data.id
    const URL = `http://users-crud.academlo.tech/users/${id}/`

    axios.patch(URL, data)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
  }

  
  const createUser = (data) => {
    const URL = "http://users-crud.academlo.tech/users/"
    axios.post(URL, data)
      .then(res => getAllUsers())
      .catch(err => console.log(err)) 
  }

  useEffect(() => {
    
  })

  const OpenCloseForm = () => {
    setOpenForm(true)
  }



  console.log(openForm)
  return (
    <div className="App">
      <h1>User-Crud Axios</h1>
      <button className="App__btn" onClick={OpenCloseForm}>Open Form</button>
      <div className={`form-container ${openForm ? "open__form":"close__form"}`}>
        < FormUser
          createUser={createUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setOpenForm={setOpenForm}
          
        />
      </div>

      <div className="card-container">
        {
          users?.map(user => (
            < UserCard
              user={user}
              key={user.id}
              getAllUsers={getAllUsers}
              setUpdateInfo={setUpdateInfo}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
