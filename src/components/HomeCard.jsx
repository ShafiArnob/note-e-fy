import React from 'react'

const HomeCard = ({page}) => {
  return (
    <div className='max-w-xs mx-auto pl-5 pt-4 pr-20 pb-16 my-2 rounded-lg bg-[#363636] drop-shadow-lg md:w-56 md:h-32 md:mx-2'>
      <p className='font-semibold'>{page.title}</p>
    </div>

  )
}

export default HomeCard