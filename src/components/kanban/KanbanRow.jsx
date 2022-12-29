import React from 'react'

const KanbanRow = ({task}) => {
  return (
    <div className='p-3 bg-[#212121] rounded-md mt-2'>
      {task.title}
    </div>
  )
}

export default KanbanRow