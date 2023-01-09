import React from 'react'
import AddItem from './AddItem'
import KanbanRow from './KanbanRow'
import { RxCross2 } from "react-icons/rx";
import { delCol } from './kanbanFunctions';

const KanbanCol = ({section,provided, page}) => {
  // console.log(section);
  return (
    <div className='w-1/5 max-w-none bg-[#383838] p-6 rounded-lg ml-4' {...provided.droppableProps} ref={provided.innerRef}>
      {/* Kanban Column title */}
      <div className='flex justify-between items-center  text-lg font-semibold mb-4'>
        {section.title}
        <br />
        {section.id}
        <span onClick={()=>delCol(section.id,page)} className='hover:text-green-600 hover:scale-125 cursor-pointer'><RxCross2 size={20}/></span>
      </div>

      {/* kanban row tasks */}
      <div>
        {section.tasks.map((task, index)=>(<KanbanRow key={task.id} task={task} index={index}></KanbanRow>))}
        {provided.placeholder}
      </div>
      <AddItem section={section} page={page}/>
    </div>
  )
}

export default KanbanCol