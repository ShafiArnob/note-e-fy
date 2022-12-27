import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import React from "react"

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Main