import React from 'react'
import KanbanCol from './KanbanCol'

const Kanban = ({page}) => {
  return (
    <>
      {/* Page Title */}
      <div className='my-4'>
        <h2 className='text-xl font-bold'>{page.title}</h2>
      </div>

      {/* kanban */}
      <div className='flex '>
        {page.kanban?.map(kanbanSection => (<KanbanCol key={kanbanSection.id} section={kanbanSection}></KanbanCol>))}
      </div>
    </>
  )
}

export default Kanban