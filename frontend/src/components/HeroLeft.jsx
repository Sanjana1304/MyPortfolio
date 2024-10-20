import React from 'react'

const HeroLeft = () => {
    // f6cfc9
  return (
    <div>
        <div className='flex justify-between'>
            <div className='w-[59%] py-[40px] sm:py-[90px] px-10 text-lg sm:text-3xl  xl:text-4xl bg-[#ffd2df] rounded-lg flex items-center justify-center'>
                <p><span className='font-custom-weight'>Full Stack Developer</span> <i>Crafting</i> Intelligent Solutions with <span className='font-custom-weight'>MERN & AI</span></p>
            </div>

            <div 
                className=' w-[39%] bg-[#ffd2df] rounded-lg bg-cover flex justify-center'>
                    <img src="/picme.jpeg" alt="" className=' h-full md:h-[400px] rounded-lg' />
            </div>
        </div>

        <div className='mt-2 flex flex-col md:flex-row justify-between'>
            <div className=' py-[60px] px-10 w-[49%] text-gray-600 bg-[#ffd2df] rounded-lg'>
                Donno Donno Donno Donno Donno Donno  Donno Donno Donno Donno 
            </div>
            <div className='rounded-lg p-4 py-6 w-1/2 bg-[#ff9ab7]'>
                <h1 className='text-2xl font-slight-bold px-3'>Contact me</h1>
                <form className='mt-3 px-3' >
                    <div className="flex w-full justify-between">
                    <input type="text" placeholder='Name' className='w-[49%] p-1 px-2 text-sm rounded my-1' />
                    <input type="email" placeholder='Email' className='w-[50%] p-1 px-2 text-sm rounded my-1' />
                    
                    </div>
                    
                    <textarea placeholder='Message' rows={3} className='w-full p-1 px-2 text-sm rounded my-1'></textarea>
                    <button type='submit' className='bg-[#ffd2df] p-2 rounded w-full'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default HeroLeft