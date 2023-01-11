import PulseLoader from 'react-spinners/PulseLoader'

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <PulseLoader color="rgb(22 163 74)" />
    </div>
  )
}

export default Loading