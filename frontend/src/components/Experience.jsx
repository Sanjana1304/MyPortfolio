import React from 'react'
import ExpBox from './ExpBox'


const Experience = () => {
  return (
    <div id='experience' className=' mt-1 p-3 gradient-anim-3 rounded-lg '>
        <h1 className='text-4xl mb-6 font-bold px-5'>Working Experiences</h1>
        
        <div className='flex justify-center'>
            <div className=' w-[88%]'>
                <ExpBox role={'MERN Stack Engineer Intern'} org={'Victory Group Of Institutions'} desc={['Spearheading the development of a scalable, feature-rich web application for a prominent educational institution, delivering a seamless digital experience for both online and offline courses.','Increased student enrollment by 20% by architecting a responsive landing page using React and TailwindCSS.','Developed a secure enrollment system that streamlined the onboarding process, reducing manual errors by 30% and improving administrative efficiency.','Collaborated with cross-functional teams to continuously optimize features, resulting in a 15% increase in user engagement.']}/>
            </div>
            
        </div>

        <div className="flex justify-center">
            <div className=' w-[88%] flex justify-end'>
                    <ExpBox role={'Web Designer (React)'} org={'Aviva Organics'} desc={['Developed a responsive and interactive e-visiting card using React and TailwindCSS','Collaborated with the client to design a visually appealing digital card ']}/>
            </div>
        </div>

        <div className="flex justify-center">
            <div className=' w-[88%]'>
                    <ExpBox role={'Freelance Project Developer (Java)'} org={'Victory Group Of Institutions'} desc={['Developed a customer-friendly action request system using Java, Swing, and MySQL to streamline service request submissions for a student\'s final year project improving efficiency by reducing unnecessary customer interactions.','Implemented database connectivity using JDBC and MySQL, allowing seamless storage and retrieval of customer requests for processing by faculty or staff']}/>
            </div>
        </div>

       
        
        
    </div>
  )
}

export default Experience