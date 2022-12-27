import { RouterProvider } from 'react-router-dom'
import './App.css'
import routes from './routes/routes'
import React from "react"
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {

  return (
    <>
    <Provider store={store}>
      <RouterProvider router={routes}/>
    </Provider>
    </>
  )
}

export default App
