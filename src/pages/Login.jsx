import React from 'react'

const Login = () => {

  return (
    <div className='h-full flex items-center justify-center'>
      <form onSubmit={Login} className='inline-block bg-zinc-600 p-10 rounded-lg flex flex-col items-center justify-center'>
        <div>
          <label className='mr-6' htmlFor="username">Username: </label>
          <input id='username' type="text" className='text-black'/>
        </div>
        <button className='btn'>Login</button>
      </form>
    </div>
  )
}

export default Login