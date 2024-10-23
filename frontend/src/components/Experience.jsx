import React from 'react'
import ExpBox from './ExpBox'

const Experience = () => {
  return (
    <div className=' mt-1 p-3 gradient-anim-3 rounded-lg '>
        <h1 className='text-4xl mb-6 font-bold px-5'>Working Experiences</h1>
        <div className='flex justify-center'>
            <div className=' w-[88%]'>
                <ExpBox role={'MERN Stack Engineer Intern'} org={'Victory Group Of Institutions'} desc={['Spearheading the development of a scalable, feature-rich web application for a prominent educational institution, delivering a seamless digital experience for both online and offline courses.','Increased student enrollment by 20% by architecting a responsive landing page using React and TailwindCSS.','Developed a secure enrollment system that streamlined the onboarding process, reducing manual errors by 30% and improving administrative efficiency.','Collaborated with cross-functional teams to continuously optimize features, resulting in a 15% increase in user engagement.']}/>
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