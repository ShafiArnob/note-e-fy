import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Page = () => {

  const [page, setPage] = useState({})
  const params = useParams()

  useEffect(()=>{
    fetch(`http://localhost:8000/pages/${params.id}`)
    .then(res => res.json())
    .then(data => setPage(data))
  },[])
  console.log(page);
  return (
    <div>
      {/* Title */}
      <div className='mx-6 my-4'>
        <h2 className='text-xl font-bold'>{page.title}</h2>
      </div>

      {/* kanban */}
      <div>

      </div>
    </div>
  )
}

export default Page