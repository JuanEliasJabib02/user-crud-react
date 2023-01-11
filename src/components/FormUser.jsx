import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import "./styles/formUser.css"


const FormUser = ({ createUser, updateInfo,updateUserById }) => {

  const { handleSubmit, reset, register } = useForm()
  

  
  const submit = (data) => {

    if (updateInfo) {
      return updateUserById(data)
    }

      createUser(data) 
      reset({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        birthday:""
      })
  }

  useEffect(() => {
    reset(updateInfo)
  },[updateInfo])



  return (
    <form className='form' onSubmit={handleSubmit(submit)} action="">
      <h2 className='form__title'>Create User</h2>
      <div className="form__div">
        <label className='form__label' htmlFor="email">
          Email
        </label>
        <input className='form__input' id="email" type="text"{...register("email")} />
      </div>
      <div className="form__div">
        <label className='form__label' htmlFor="password">
          Password
        </label>
        <input  className="form__input"id="password" type="text" {...register("password")} />
      </div>
      <div className="form__div">
        <label  class ="form__label"htmlFor="first_name">
          First Name
        </label>
        <input className='form__input' id="first_name" type="text" {...register("first_name")} />
      </div>
      <div className="form__div">
        <label className='form__label' htmlFor="last_name">
          Last Name
        </label>
        <input className='form__input' id="last_name" type="text" {...register("last_name")} />
      </div>
      <div className="form__div">
        <label className='form__label' htmlFor="birthday">
          Birthday
        </label>
        <input className='form__input' id="birthday" type="date" {...register("birthday")} />
      </div>
      <button className='form__submit-btn'>Submit</button> 
   
    </form>
  )
}

export default FormUser