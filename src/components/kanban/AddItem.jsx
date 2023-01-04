import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {updateTask} from './kanbanFunctions'
import { RxCross2 } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";

const AddItem = ({section, page}) => {
  const [collapse, setCollapse] = useState(false)
  const [item, setItem] = useState('')

  const addItem = (e) =>{
    e.preventDefault()   
    const data = {
      id: uuidv4(),
      title: item
    }

    const selectedCol = page.kanban.find(col => col.id ===section.id)
    const newPage = page.kanban.filter(col => col.id !== section.id)

    selectedCol.tasks.push(data)
    newPage.push(selectedCol)

    page = {...page, kanban:newPage}

    updateTask(page)
    setItem('') 
  }
  return (
    <div className='flex items-center justify-center cursor-pointer p-1.5 rounded-md mt-2 bg-[#212121] border-dashed border-2 border-green-600 border-opacity-70'>
      
      {collapse && 
      <form onSubmit={addItem} className='flex flex-col p-0.5 py-2  space-y-2'>
        <input onChange={(e)=>setItem(e.target.value)} value={item} type="text" className='p-2  rounded-md bg-[#383838] w-full' placeholder='Enter Item Title'/>
        <div className='flex items-center justify-between w-3/5'>
          <button className='bg-green-500 hover:bg-green-600 text-neutral-100 text-sm p-1.5 m-1 my-1.5 rounded-md text-center'>Add Item</button>
          <span onClick={()=>setCollapse(!collapse)} className="mr-2"><RxCross2 size={20}/></span>
        </div>

      </form>
      }

      {!collapse && <button  onClick={()=>setCollapse(!collapse)} className='flex items-center justify-center w-full'><span className='mr-1.5'><AiOutlinePlus/></span>AddItem</button>}
    </div>
  )
}

export default AddItem