import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const pages = useSelector((state) => state)
  console.log(pages);
  return (
    <div>Home</div>
  )
}

export default Home