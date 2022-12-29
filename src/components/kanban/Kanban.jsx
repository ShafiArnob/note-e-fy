import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import KanbanCol from './KanbanCol'

const Kanban = ({page}) => {
  const updateTask = data =>{
    fetch(`http://localhost:8000/pages/${page.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=> data)
  }
  const onDragEnd = result =>{
    if (!result.destination) return
    const { source, destination } = result

    if (source.droppableId !== destination.droppableId) {
        const sourceColIndex = page.kanban.findIndex(e => e.id === source.droppableId)
        const destinationColIndex = page.kanban.findIndex(e => e.id === destination.droppableId)
        
        const sourceCol = page.kanban[sourceColIndex]
        const destinationCol = page.kanban[destinationColIndex]

        const sourceTask = [...sourceCol.tasks]
        const destinationTask = [...destinationCol.tasks]

        const [removed] = sourceTask.splice(source.index, 1)
        destinationTask.splice(destination.index, 0, removed)

        page.kanban[sourceColIndex].tasks = sourceTask
        page.kanban[destinationColIndex].tasks = destinationTask

        updateTask(page)
    }
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