import React, { useEffect, useState } from 'react'
import { useIdToken } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import { projectAuth } from '../firebase/config'
import { useSignup } from '../firebase/useSignup'

const Signup = () => {
  const [signupFormData,setSignupFormData] = useState({})

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {signup, error, loading} = useSignup()
  const navigate = useNavigate()

  const [token] = useIdToken(projectAuth);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

    useEffect( () =>{
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

  const onSubmit = (e) =>{
    e.preventDefault()
    // console.log("Sign - ",signupFormData);
    signup(email, password, username)
    
    // if(!loading && !error){
    //   //dispatch Login action
    //   navigate('/')
    // }
  }

  // console.log("u",username,"e",email,"p",password);
  if(loading){
    return <Loading/>
  }
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <form onSubmit={onSubmit} className='inline-block bg-[#383838] p-9 rounded-lg flex flex-col w-1/4 justify-center space-y-4'>
        <h1 className='text-center font-bold font-mono text-2xl'>Sign-up</h1>

        <div>
          <label className='text-gray-300 font-semibold' htmlFor="username">Username: </label>
          <input onChange={(e)=>setUsername(e.target.value)} value={username} onBlur={(e)=>setSignupFormData({...signupFormData, [e.target.name] : e.target.value })} name='username' id='username' type="text" className='text-neutral-300 bg-[#212121] rounded-md h-10 mt-1 p-3 w-11/12'/>
        </div>

        <div>
          <label className='text-gray-300 font-semibold' htmlFor="email">Email: </label>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} onBlur={(e)=>setSignupFormData({...signupFormData, [e.target.name] : e.target.value })}  name='email' id='email' type="email" className='text-neutral-300 bg-[#212121] rounded-md h-10 mt-1 p-3 w-11/12'/>
        </div>

        <div>
          <label className='text-gray-300 font-semibold' htmlFor="password">Password: </label>
          <input onChange={(e)=>setPassword(e.target.value)} value={password} onBlur={(e)=>setSignupFormData({...signupFormData, [e.target.name] : e.target.value })}  name='password' id='password' type="password" className='text-neutral-300 bg-[#212121] rounded-md h-10 mt-1 p-3 w-11/12'/>
        </div>

        <button className='btn my-10 py-2'>Signup</button>
        <p>Already have an account <span className='text-blue-600 underline'><Link to="/login">click</Link></span> to login</p>
        {error && <p className=' p-2 py-4 rounded-lg border-4 border-red-700 bg-red-600 bg-opacity-60'>{error.message}</p>}
      </form>
    </div>
  )
}

export default Signup