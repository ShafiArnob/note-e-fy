import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeCard from '../components/HomeCard';
import loadPagesData from '../redux/thunk/pages/fetchPages';
import { Link } from 'react-router-dom';
import { getPages } from '../firebase/getPages';
import { useAuthState } from 'react-firebase-hooks/auth';
import { projectAuth } from '../firebase/config';
import Loading from '../components/Loading';
const Home = () => {
  const pages = useSelector((state) => state.kanban.pages)
  const [user, loading, error] = useAuthState(projectAuth)

  const dispatch = useDispatch()

  //Laod Data
  useEffect(()=>{
    dispatch(loadPagesData())
  },[])

  if(loading){
    return <Loading/>
  }

  // const {documents, error:err} = getPages(user.uid)
  // console.log(documents);
  
  return (
    <div className='flex'>
      {
        pages.map(page => <Link to={`/pages/${page.id}`} key={page.id}><HomeCard  page={page}></HomeCard></Link>)
      }
    </div>
  )
}

export default Home