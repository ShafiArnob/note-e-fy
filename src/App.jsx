import { RouterProvider } from 'react-router-dom'
import './App.css'
import routes from './routes/routes'
import React from "react"

function App() {

  return (
    <div className="App">
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
