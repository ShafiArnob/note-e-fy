import React, { useEffect, useState } from 'react'
import { useIdToken, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading';
import { projectAuth } from '../firebase/config';
import { loginUser } from '../redux/actions/pageAction';

const Login = () => {
  const [loginFormData,setloginFormData] = useState({})
  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')
  let signInError
  const [ signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(projectAuth);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [token] = useIdToken(projectAuth);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

    useEffect( () =>{
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

  const onSubmit = async(e) =>{
    e.preventDefault()
    await signInWithEmailAndPassword(email,password)
    
    // if(!loading && !error){
    //   //dispatch Login action
    //   dispatch(loginUser(user))
    //   navigate('/')
    // }
  }
  
  if(loading && !error){
    return <Loading/>
  }
  if(error){
    signInError = <p className=' p-2 py-4 rounded-lg border-4 border-red-700 bg-red-600 bg-opacity-60'><small>{error.message}</small></p>
  }
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <form onSubmit={onSubmit} className='inline-block bg-[#383838] p-9 w-1/4 rounded-lg flex flex-col  justify-center space-y-4'>
        <h1 className='text-center font-bold font-mono text-2xl'>Login</h1>

        <div>
          <label className='text-gray-300 font-semibold' htmlFor="email">Email: </label>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} onBlur={(e)=>setloginFormData({...loginFormData, [e.target.name] : e.target.value })}  name='email' id='email' type="email" className='text-neutral-300 bg-[#212121] rounded-md h-10 mt-1 p-3 w-11/12' required />
        </div>

        <div>
          <label className='text-gray-300 font-semibold' htmlFor="password">Password: </label>
          <input onChange={(e)=>setPassword(e.target.value)} value={password}  onBlur={(e)=>setloginFormData({...loginFormData, [e.target.name] : e.target.value })}  name='password' id='password' type="password" className='text-neutral-300 bg-[#212121] rounded-md h-10 mt-1 p-3 w-11/12' required/>
        </div>

        <button className='btn my-10 py-2'>Login</button>

        <p>Dont have an account <span className='text-blue-600 underline'><Link to="/signup">click</Link></span> to signup</p>
        {signInError}
      </form>
      {/* {error && <p>{error.message}</p>} */}
    </div>
  )
}

export default Login