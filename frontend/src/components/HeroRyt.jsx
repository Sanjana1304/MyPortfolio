import React from 'react'

const HeroRyt = () => {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='h-[81%] border'>b</div>

      <div className='gradient-anim-2 h-[18%] rounded-lg p-3 '>
        <h1 className='text-xl'>Education</h1>
        <p className='text-sm'><span className='font-bold'>B.Tech</span> in Computer Science and Engineering</p>
        <p className='text-sm'>Presidency University, Bangalore</p>
        <p className='text-sm font-semibold'>CGPA: 8.90</p>
        <p className='text-[10px]'>2021-2025</p>
      </div>
    </div>
  )
}

export default HeroRyt