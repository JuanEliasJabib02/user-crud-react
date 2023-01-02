import React from 'react'
import axios from "axios"

const UserCard = ({ user, getAllUsers }) => {
  
  const deleteUserById = () => {
    
    const URL = `http://users-crud.academlo.tech/users/${user.id}`
    axios.delete(URL)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
  } 

  return (
    <article className="user-card">
      <header>
        <h3 className="user-card__name">
          {user.first_name} {user.last_name}
        </h3>
      </header>
      <ul>
        <li><span>Email: </span>{user.email}</li>
        <li><span>Birthday:</span>{user.birthday}</li>
      </ul>
      <footer>
        <button className="user-card__edit">
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={deleteUserById} className="user-card__delete">
          <i className="fa-solid fa-trash"></i>
        </button>
      </footer>
    </article>
    
  )
}

export default UserCard