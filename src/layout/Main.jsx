import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import React from "react"

const Main = () => {
  return (
    <div style={{height:"100vh"}}>
      <Navbar/>
      <div className="block h-full px-10 py-5 ">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Main