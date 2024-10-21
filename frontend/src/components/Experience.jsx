import React from 'react'

const Experience = () => {
  return (
    <div className=' mt-1 flex flex-col justify-between sm:flex-row p-3'>

        <div className='sm:w-1/2 text-[#ffd2df]'>
            <h1 className='text-2xl mb-2'>Experience</h1>
            <h2 className='font-semibold'>MERN Stack Engineer Intern</h2>
            <i>Victory Group Of Institutions</i>
            <p className=''>
                <ul className='list-disc list-inside text-[#d6cbce] text-sm w-[90%]'>
                    <li>Spearheading the development of a scalable, feature-rich web application for a prominent educational
                    institution, delivering a seamless digital experience for both online and offline courses.</li>
                    
                    <li>Increased student enrollment by 20% by architecting a responsive landing page using React and
                    TailwindCSS.</li>
                    
                    <li>Developed a secure enrollment system that streamlined the onboarding process, reducing manual errors by
                    30% and improving administrative efficiency.</li>
                    <li>Collaborated with cross-functional teams to continuously optimize features, resulting in a 15% increase in
                    user engagement.</li>
                </ul>
            
            
          
            
            </p>

        </div>
        <div className='sm:w-1/2 border flex justify-end'>
        <div className="border  shadow shadow-pink-700 cursor-pointer">
        <img src="/vict.png" alt="" className='' />
        <p className='text-center text-white font-bold'>V i s i t</p>
        </div>
        
        </div>
    </div>
  )
}

export default Experience