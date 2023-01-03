import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";

const AddItem = () => {
  const [collapse, setCollapse] = useState(true)
  
  let content;

  

  return (
    <div className='flex items-center justify-center cursor-pointer p-1.5 rounded-md mt-2 bg-[#212121] border-dashed border-2 border-green-600 border-opacity-70'>
      
      {collapse && 
      <div className='flex flex-col justify-center p-0.5'>
        <input type="text" className='p-2  rounded-md bg-[#383838] w-full' placeholder='Enter Item Title'/>
        <div className='flex items-center justify-between w-4/5 '>
          <button className='bg-green-500 hover:bg-green-600 text-neutral-100 text-sm p-1.5 m-1 my-1.5 rounded-md text-center'>Add Item</button>
          <span onClick={()=>setCollapse(!collapse)} className="mr-2"><RxCross2 size={20}/></span>
        </div>

      </div>
      }

      {!collapse && <button  onClick={()=>setCollapse(!collapse)} className='flex items-center justify-center'><span className='mr-1.5'><AiOutlinePlus/></span>AddItem</button>}
    </div>
  )
}

export default AddItem