import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Kanban from '../components/kanban/Kanban'
import KanbanCol from '../components/kanban/KanbanCol'

const Page = () => {

  const [page, setPage] = useState({})
  const params = useParams()

  useEffect(()=>{
    fetch(`http://localhost:8000/pages/${params.id}`)
    .then(res => res.json())
    .then(data => setPage(data))
  },[])
  // console.log(page);
  return (
    <div className='mx-6 my-4'>
      <Kanban page={page}/>
    </div>
  )
}

export default Page