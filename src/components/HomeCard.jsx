import React from 'react'

const HomeCard = ({page}) => {
  return (
    <div className='pl-5 pt-4 pr-20 pb-16 m-6 rounded-lg bg-[#363636] drop-shadow-lg'>
      <p className='font-semibold'>{page.title}</p>
    </div>

  )
}

export default HomeCard