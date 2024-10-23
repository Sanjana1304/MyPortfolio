import React from 'react'
import ExpBox from './ExpBox'

const Experience = () => {
  return (
    <div className=' mt-1 p-3 gradient-anim-3 rounded-lg '>
        <h1 className='text-4xl mb-6 font-bold px-5'>Working Experiences</h1>
        <div className='flex justify-center'>
            <div className=' w-[88%]'>
                <ExpBox role={'MERN Stack Engineer Intern'}/>
            </div>
            
        </div>

        <div className="flex justify-center">
            <div className=' w-[88%] flex justify-end'>
                    <ExpBox/>
            </div>
        </div>

        <div className="flex justify-center">
            <div className=' w-[88%]'>
                    <ExpBox/>
            </div>
        </div>

       
        
        
    </div>
  )
}

export default Experience