import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import loadPagesData from '../redux/thunk/pages/fetchPages';

const Home = () => {
  const pages = useSelector((state) => state.kanban)
  console.log(pages);

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(loadPagesData())
  },[])
  return (
    <div>Home</div>
  )
}

export default Home