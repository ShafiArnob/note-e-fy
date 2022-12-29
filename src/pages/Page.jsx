import React from 'react'
import { useParams } from 'react-router-dom'

const Page = () => {
  const params = useParams()
  return (
    <div>Page {params.id}</div>
  )
}

export default Page