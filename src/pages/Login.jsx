import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [loginFormData,setloginFormData] = useState({})

  const onSubmit = (e) =>{
    e.preventDefault()
    console.log("Login - ",loginFormData);
  }

  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <form onSubmit={onSubmit} className='inline-block bg-[#383838] p-9 rounded-lg flex flex-col  justify-center space-y-4'>
        <h1 className='text-center font-bold font-mono text-2xl'>Login</h1>

        <div>
          <label className='text-gray-300 font-semibold' htmlFor="email">Email: </label>
          <input onBlur={(e)=>setloginFormData({...loginFormData, [e.target.name] : e.target.value })}  name='email' id='email' type="text" className='text-neutral-300 bg-[#212121] rounded-md h-10 mt-1 p-3 w-11/12'/>
        </div>

        <div>
          <label className='text-gray-300 font-semibold' htmlFor="password">Password: </label>
          <input onBlur={(e)=>setloginFormData({...loginFormData, [e.target.name] : e.target.value })}  name='password' id='password' type="password" className='text-neutral-300 bg-[#212121] rounded-md h-10 mt-1 p-3 w-11/12'/>
        </div>

        <button className='btn my-10 py-2'>Login</button>

        <p>Dont have an account <span className='text-blue-600 underline'><Link to="/signup">click</Link></span> to signup</p>
      </form>
    </div>
  )
}

export default Login