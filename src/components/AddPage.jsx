import { FaPlus } from 'react-icons/fa'

const AddPage = () => {
  return (
    <div className='flex items-center justify-center p-1 mx-6 space-x-1.5 border-solid border-green-700 border-2 rounded-md hover:bg-green-900 hover:bg-opacity-30 cursor-pointer'>
      <FaPlus/>
      <p className='pb-0.5'>New Page</p>
    </div>
  )
}

export default AddPage