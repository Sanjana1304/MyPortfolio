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
            <div className='py-[30px] md:py-[60px] px-10 w-full mb-2 md:w-[49%] text-gray-600 bg-[#ffd2df] rounded-lg'>
               <h1 className='text-black text-2xl font-slight-bold mb-2 md:mb-3'>Let's Connect !</h1>
               
               <div className='flex justify-between md:flex-col gap-2'>
                <div className="flex md:text-[11px] gap-1">
                    <p className='bg-[#ff9ab7] p-3 rounded-lg px-4 cursor-pointer w-1/2'>+918838202521</p>
                    <p className='bg-[#ff9ab7] p-3 rounded-lg px-4 cursor-pointer w-1/2'>sensanjana072@gmail.com</p>
                </div>

                <div className="flex md:text-[11px] gap-1">
                <p className='bg-[#ff9ab7] p-3 rounded-lg px-4 cursor-pointer w-1/2'>GitHub</p>
               <p className='bg-[#ff9ab7] p-3 rounded-lg px-4 cursor-pointer w-1/2'>LinkedIn</p>
               
                </div>
               
               
               </div>
               <p></p>
            </div>
            <div className='rounded-lg p-4 py-6 w-full md:w-1/2 bg-[#ff9ab7]'>
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