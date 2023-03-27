import React from 'react'
import AddItem from './AddItem'
import KanbanRow from './KanbanRow'
import { RxCross2 } from "react-icons/rx";
import { AiOutlineEdit } from 'react-icons/ai'
import { delCol, editCol } from './kanbanFunctions';

const KanbanCol = ({section,provided, page}) => {
  // console.log(section);
  return (
    <div className='w-72  max-w-none bg-[#383838] p-6 rounded-lg m-4' {...provided.droppableProps} ref={provided.innerRef}>
      {/* Kanban Column title */}
      <div className='flex justify-between items-center  text-lg font-semibold mb-4'>
        <span className='flex items-center'>
          {section.title}
          <span onClick={()=>editCol(section,page)} className='mx-1 hover:text-green-600 hover:scale-110'><AiOutlineEdit size="1.1rem"/></span>
        </span>
        {/* <br />
        {section.id} */}
        <span onClick={()=>delCol(section.id,page)} className='hover:text-green-600 hover:scale-125 cursor-pointer'><RxCross2 size={20}/></span>
      </div>

      {/* kanban row tasks */}
      <div>
        {section.tasks.map((task, index)=>(<KanbanRow key={task.id} task={task} index={index} page={page} colId={section.id}></KanbanRow>))}
        {provided.placeholder}
      </div>
      <AddItem section={section} page={page}/>
    </div>
  )
}

export default KanbanCol