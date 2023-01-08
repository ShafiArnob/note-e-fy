import { v4 as uuidv4 } from 'uuid'
import { FaPlus } from 'react-icons/fa'
import { useAuthState } from 'react-firebase-hooks/auth'
import { projectAuth } from '../firebase/config'
import { addPage } from './kanban/kanbanFunctions'

const AddPage = () => {

  const [user] = useAuthState(projectAuth)

  const addNewPage = () => {
    const pageTitle = prompt("Enter Page Title")
    const kanban = []
    if(pageTitle){
      const data = {
        userName: user.displayName,
        id: uuidv4(),
        title: pageTitle,
        kanban: kanban
      }
      addPage(data, user)
    }
    else{
      alert("No Page is Created")
    }
  }

  return (
    <div onClick={addNewPage} className='flex items-center justify-center p-1 mx-6 space-x-1.5 border-solid border-green-700 border-2 rounded-md hover:bg-green-800 hover:bg-opacity-30 cursor-pointer'>
      <FaPlus/>
      <p className='pb-0.5'>New Page</p>
    </div>
  )
}

export default AddPage