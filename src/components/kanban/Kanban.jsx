import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { updateTask } from './kanbanFunctions'
import { useAuthState } from 'react-firebase-hooks/auth'
import { projectAuth } from '../../firebase/config'


import AddCol from './AddCol'
import KanbanCol from './KanbanCol'
import DeletePage from '../DeletePage'
import EditPage from '../EditPage'

const Kanban = ({page}) => {
  const [user, loading] = useAuthState(projectAuth)
  // console.log(page);
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
        // console.log(page);
        updateTask(page)
    }
  }
  return (
    <div className='w-full mx-auto '>
    <DragDropContext onDragEnd={onDragEnd}>
      {/* Page Title */}
      <div className='flex justify-center space-x-2 items-center py-4 md:justify-start'>
        <h2 className='text-xl font-bold mr-3'>{page.title}</h2>
        {!loading ? <EditPage page = {page} user={user}/> : ""}
        {!loading ? <DeletePage page = {page} user={user}/> : ""}
      </div>

      {/* kanban */}
      {/* grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 */}
      <div className='flex flex-wrap justify-center md:justify-start'>
        {page.kanban?.sort((a,b) => a.index - b.index).map(kanbanSection => (
          <Droppable key={kanbanSection.id} droppableId={kanbanSection.id}>
            {
              (provided) => (
                <KanbanCol key={kanbanSection.id} section={kanbanSection} provided={provided} page={page}></KanbanCol>
              )
            }
          </Droppable>
        ))}
        <AddCol page={page}></AddCol>
      </div>
    </DragDropContext>
    </div>
  )
}

export default Kanban