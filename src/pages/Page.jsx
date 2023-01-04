import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Kanban from '../components/kanban/Kanban'

const Page = () => {

  const [page, setPage] = useState({})
  const params = useParams()
  const [reload, setReload] = useState(false)
  
  useEffect(()=>{
    fetch(`http://localhost:8000/pages/${params.id}`)
    .then(res => res.json())
    .then(data => setPage(data))
  },[])

  // const {data,error,isLoading, refetch} = useQuery('page', async () => {
  //   const res = await fetch(`http://localhost:8000/pages/${params.id}`).then(res=> res.json())
  //   return res
  // })
  // if(isLoading){
  //   return <h1>Loading...</h1>
  // }
  // console.log(data);
  return (
    <div className='mx-6 my-4'>
      <Kanban page={page}/>
    </div>
  )
}

export default Page