import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { RxCross2 } from "react-icons/rx";
import { changeColumn, delItem, editItem } from './kanbanFunctions';
import { BiEdit } from 'react-icons/bi'

const KanbanRow = ({task, index, page,colId, section}) => {
  // console.log(index);
  // console.log(page);
  // console.log(task);
  // console.log(colId);
  const changeCol = (fromCol, toCol, task) => {
    // console.log("buzz");
    changeColumn(fromCol , toCol, task, page);
  }
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef}
        {...provided.draggableProps} 
        {...provided.dragHandleProps} 
        style={{...provided.draggableProps.style, opacity: snapshot.isDragging?'0.5':'1'}}>
          <div className='bg-[#212121] rounded-md mt-2'>
            <div className='flex items-center justify-between p-3 '>
            <span className='flex items-center'>
              {task.title}
              
                
              
              <span onClick={() => editItem(task, colId, page)} className='px-0.5 hover:text-green-600 cursor-pointer'><BiEdit/></span>

              
            </span>
            {/* <br />
            {task.id} */}
            <span onClick={() => delItem(task.id, colId, page)} className='hover:text-green-600 cursor-pointer'><RxCross2/></span>
            </div>
            <select name="colums" id="columns" className='bg-[#383838] m-2' onChange={e=>changeCol(colId,e.target.value, task, section)}>
                  <option value="">Select Column</option>
                  {
                    page.kanban.map(cols=>(
                      <option key={cols.id} value={cols.id}>{cols.title}</option>
                    ))
                  }
          </select>
          </div>
          
        </div>
      )}
    </Draggable>
  )
}

export default KanbanRow