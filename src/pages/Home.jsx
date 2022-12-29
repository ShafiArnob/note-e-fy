import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeCard from '../components/HomeCard';
import loadPagesData from '../redux/thunk/pages/fetchPages';

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
        pages.map(page => <HomeCard key={page.id} page={page}></HomeCard>)
      }
    </div>
  )
}

export default Home