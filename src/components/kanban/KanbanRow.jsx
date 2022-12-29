import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const KanbanRow = ({task, index}) => {
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef}
        {...provided.draggableProps} 
        {...provided.dragHandleProps} 
        style={{...provided.draggableProps.style, opacity: snapshot.isDragging?'0.5':'1'}}>
          <div className='p-3 bg-[#212121] rounded-md mt-2'>
            {task.title}
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default KanbanRow