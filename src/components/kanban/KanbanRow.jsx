import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { RxCross2 } from "react-icons/rx";
import { delItem } from './kanbanFunctions';

const KanbanRow = ({task, index, page,colId}) => {
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef}
        {...provided.draggableProps} 
        {...provided.dragHandleProps} 
        style={{...provided.draggableProps.style, opacity: snapshot.isDragging?'0.5':'1'}}>
          <div className='flex items-center justify-between p-3 bg-[#212121] rounded-md mt-2'>
            {task.title}
            <br />
            {task.id}
            <span onClick={()=>delItem(task.id, colId, page)} className='hover:text-green-600 cursor-pointer'><RxCross2/></span>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default KanbanRow