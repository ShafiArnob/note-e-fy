import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
      {/* Page Title */}
      <div className='my-4'>
        <h2 className='text-xl font-bold'>{page.title}</h2>
      </div>

      {/* kanban */}
      <div>
        {page.kanban?.map(kanbanSection => (<KanbanCol key={kanbanSection.id} section={kanbanSection}></KanbanCol>))}
      </div>
    </div>
  )
}

export default Page