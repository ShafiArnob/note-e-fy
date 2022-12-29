import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import KanbanCol from './KanbanCol'

const Kanban = ({page}) => {
  const onDragEnd = result =>{
    console.log(result);
  }
  return (
    <>
    <DragDropContext onDragEnd={onDragEnd}>
      {/* Page Title */}
      <div className='my-4'>
        <h2 className='text-xl font-bold'>{page.title}</h2>
      </div>

      {/* kanban */}
      <div className='flex '>
        {page.kanban?.map(kanbanSection => (
          <Droppable key={kanbanSection.id} droppableId={kanbanSection.id}>
            {
              (provided) => (
                <KanbanCol key={kanbanSection.id} section={kanbanSection} provided={provided}></KanbanCol>
              )
            }
          </Droppable>
        ))}
      </div>
    </DragDropContext>
    </>
  )
}

export default Kanban