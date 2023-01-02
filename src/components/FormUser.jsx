import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"



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
    <form onSubmit={handleSubmit(submit)} action="">
      <h2>Create User</h2>
      <label htmlFor="email">Email</label>
      <input id="email" type="text"{...register("email")} />
      <label htmlFor="password">Password</label>
      <input id="password" type="text" {...register("password")}/>
      <label htmlFor="first_name">First Name</label>
      <input id="first_name" type="text" {...register("first_name")} />
      <label htmlFor="last_name">Last Name</label>
      <input id="last_name" type="text" {...register("last_name")} />
      <label htmlFor="birthday">Birthday</label>
      <input id="birthday" type="date" {...register("birthday")} />
      <button>SUBMIT</button> 
   
    </form>
  )
}

export default FormUser