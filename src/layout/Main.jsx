import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import React from "react"

const Main = () => {
  return (
    <div>
      <Navbar/>
      <div className="px-10 py-5">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Main