import React from 'react'
import { addColumn } from './kanbanFunctions'

const AddCol = ({page}) => {

  return (
    <div className=" flex flex-col justify-center cursor-pointer w-2/12 h-full bg-[#383838] p-2 rounded-lg ml-4 border-dashed border-2 border-green-600">
      <input type="text" name="" id="" className='p-2 m-1 rounded-md bg-[#212121]'/>
      <p onClick={() => addColumn()} className='bg-green-500 hover:bg-green-600 text-neutral-100 font-semibold p-1 m-1 my-1.5 w-4/12 rounded-md text-center'>Add</p>
    </div>
  )
}

export default AddCol