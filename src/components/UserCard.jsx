import React from 'react'
import axios from "axios"
import "./styles/userCard.css"

const UserCard = ({ user, getAllUsers, updateUserById,setUpdateInfo }) => {
  
  const deleteUserById = () => {
    
    const URL = `http://users-crud.academlo.tech/users/${user.id}`
    axios.delete(URL)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
  } 

  const handleUpdate = () => {
    setUpdateInfo(user)
  }

  return (
    <article className="user-card">
      <header className='user-card__header'>
        <h3 className="user-card__name">
          {user.first_name} {user.last_name}
        </h3>
      </header>
      <ul className='user-card__list'>
        <li className='user-card__list-item'>
          <span>Email </span><p>{user.email}</p>
        </li>
        <li className='user-card__list-item'>
          <span>Birthday</span><p>{user.birthday}</p>
        </li>
      </ul>
      <footer className='user-card__footer'>
        <button onClick={handleUpdate} className="user-card__edit">
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