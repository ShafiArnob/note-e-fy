import React from 'react'
import KanbanRow from './KanbanRow'

const KanbanCol = ({section}) => {
  console.log(section);
  return (
    <div>
      {/* Kanban Column title */}
      <div>
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