import axios from 'axios'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { updateTask } from './kanbanFunctions'

const AddCol = ({page}) => {
  const [colTitle, setColTitle] = useState('')
  const tasks = []
  const addColumn = (e) => {
    e.preventDefault()   
    if(colTitle){
      const data = {
        id: uuidv4(),
        title: colTitle,
        tasks:tasks,
        index:page.kanban.length
      }
  
      page.kanban.push(data)
  
      const res = updateTask(page)
      // const {data:res} = axios.put(`http://localhost:8000/pages/${page.id}`,page).then(res => res.json())
      setColTitle('')
    }
  }
  return (
    <form onSubmit={addColumn} className=" flex flex-col justify-center cursor-pointer rgb(22 163 74) m-4 w-48  h-36 bg-[#383838] p-2 rounded-lg ml-4 border-dashed border-2 border-green-600">
      <input onChange={(e)=>setColTitle(e.target.value)} value={colTitle} type="text" name="" id="" className='p-2 m-1 rounded-md bg-[#212121]'/>
      <button className='bg-green-500 hover:bg-green-600 text-neutral-100 font-semibold p-1 m-1 my-1.5 w-4/12 rounded-md text-center'>Add</button>
    </form>
  )
}

export default AddCol