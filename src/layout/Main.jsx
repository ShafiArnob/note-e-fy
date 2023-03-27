import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import React from "react"

const Main = () => {
  return (
    <div style={{height:"91vh"}}>
      <Navbar/>
      <div className="block h-full">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Main