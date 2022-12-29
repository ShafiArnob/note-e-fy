import React from 'react'
import KanbanRow from './KanbanRow'

const KanbanCol = ({section}) => {
  console.log(section);
  return (
    <div className='w-1/4 bg-[#383838] p-6 rounded-lg ml-4'>
      {/* Kanban Column title */}
      <div className='text-lg font-semibold mb-4'>
        {section.title}
      </div>

      {/* kanban row tasks */}
      <div>
        {section.tasks.map(task=>(<KanbanRow key={task.id} task={task}></KanbanRow>))}
      </div>
    </div>
  )
}

export default KanbanCol