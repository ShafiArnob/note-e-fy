import React, { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom'
import { projectAuth } from '../firebase/config';

const Login = () => {
  const [loginFormData,setloginFormData] = useState({})
  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')

  const [ signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(projectAuth);
  const navigate = useNavigate()
  const onSubmit = (e) =>{
    e.preventDefault()
    const user = signInWithEmailAndPassword(email,password)
    if(user){
      navigate('/')
    }
  }
  // console.log(email, password);
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <form onSubmit={onSubmit} className='inline-block bg-[#383838] p-9 rounded-lg flex flex-col  justify-center space-y-4'>
        <h1 className='text-center font-bold font-mono text-2xl'>Login</h1>

        <div>
          <label className='text-gray-300 font-semibold' htmlFor="email">Email: </label>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} onBlur={(e)=>setloginFormData({...loginFormData, [e.target.name] : e.target.value })}  name='email' id='email' type="text" className='text-neutral-300 bg-[#212121] rounded-md h-10 mt-1 p-3 w-11/12'/>
        </div>

        <div>
          <label className='text-gray-300 font-semibold' htmlFor="password">Password: </label>
          <input onChange={(e)=>setPassword(e.target.value)} value={password}  onBlur={(e)=>setloginFormData({...loginFormData, [e.target.name] : e.target.value })}  name='password' id='password' type="password" className='text-neutral-300 bg-[#212121] rounded-md h-10 mt-1 p-3 w-11/12'/>
        </div>

        <button className='btn my-10 py-2'>Login</button>

        <p>Dont have an account <span className='text-blue-600 underline'><Link to="/signup">click</Link></span> to signup</p>
      {/* {error && <p>{error}</p>} */}
      </form>
      {/* {error && <p>{error.message}</p>} */}
      {loading && <p>Loading....</p>}
    </div>
  )
}

export default Login