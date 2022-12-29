import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeCard from '../components/HomeCard';
import loadPagesData from '../redux/thunk/pages/fetchPages';
import { Link } from 'react-router-dom';
const Home = () => {
  const pages = useSelector((state) => state.kanban.pages)
  // console.log(pages);

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(loadPagesData())
  },[])
  return (
    <div className='flex'>
      {
        pages.map(page => <Link to={`/pages/${page.id}`} key={page.id}><HomeCard  page={page}></HomeCard></Link>)
      }
    </div>
  )
}

export default Home