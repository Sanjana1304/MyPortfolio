import React from 'react'

const HeroRyt = () => {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='h-[64%] border p-3 rounded-lg bg-[#ffd2df]'>
        <h1 className='text-xl mb-1'>Technical Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-4">
          <p className="p-3 rounded-lg lg:py-2 px-4 w-full  bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white">React.js</p>
          <p className="p-3 rounded-lg lg:py-2 px-4 w-full bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white">Node.js</p>
          <p className="p-3 rounded-lg lg:py-2 px-4 w-full bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white">Express.js</p>
          <p className="p-3 rounded-lg lg:py-2 px-4 w-full bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white">Javascript</p>
          <p className="p-3 rounded-lg lg:py-2 px-4 w-full bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white">Bootstrap</p>
          <p className="p-3 rounded-lg lg:py-2 px-4 w-full bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white">Tailwind</p>
          <p className="p-3 rounded-lg lg:py-2 px-4 w-full bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white">MySQL</p>
          <p className="p-3 rounded-lg lg:py-2 px-4 w-full bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white">MongoDB</p>
          <p className="p-3 rounded-lg lg:py-2 px-4 w-full bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white">Java</p>
          <p className="p-3 rounded-lg lg:py-2 px-4 w-full bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white">Python</p>
          <p className="p-3 rounded-lg lg:py-2 px-4 w-full bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white">HTML5/CSS3</p>
          <p className="p-3 rounded-lg lg:py-2 px-4 w-full bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white">Tkinter & Swing</p>
          <p className="p-3 rounded-lg lg:py-2 px-4 w-full bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white">RESTfulAPIs</p>
          <p className="p-3 rounded-lg lg:py-2 px-4 w-full bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white">Git/GitHub</p>
</div>


      </div>

      <div className="border h-[15%] rounded-lg p-3">
        <h1 className='text-lg mb-1 text-white'>Check Out My <span className='font-bold'>Resume </span>!</h1>
        {/* https://drive.google.com/file/d/1X7k1-Bh40c2kudQW5kWvxgBqLFAaUiW4/view?usp=sharing */}
        <a href="/SANJANA_RESUMEe.pdf" download><button className='gradient-anim p-2 w-full rounded-lg px-5 font-semibold'>Download</button></a>
      </div>

      <div className='gradient-anim-2 h-[19%] rounded-lg p-3 '>
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