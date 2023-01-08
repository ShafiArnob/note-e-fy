import React from 'react'
import AddItem from './AddItem'
import KanbanRow from './KanbanRow'

const KanbanCol = ({section,provided, page}) => {
  // console.log(section);
  return (
    <div className='w-1/5 max-w-none bg-[#383838] p-6 rounded-lg ml-4' {...provided.droppableProps} ref={provided.innerRef}>
      {section.id}
      {/* Kanban Column title */}
      <div className='text-lg font-semibold mb-4'>
        {section.title}
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