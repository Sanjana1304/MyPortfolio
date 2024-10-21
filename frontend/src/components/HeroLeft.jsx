import React from 'react'

const HeroLeft = () => {
    // f6cfc9
  return (
    <div>
        <div className='flex justify-between'>
            <div className='w-[59%] py-[40px] sm:py-[90px] px-10 text-xl sm:text-3xl  xl:text-4xl bg-[#ffd2df] rounded-lg flex items-center justify-center'>
                <p><span className='font-custom-weight'>Full Stack Developer</span> <i>Crafting</i> Intelligent Solutions with <span className='font-custom-weight'>MERN & AI</span></p>
            </div>

            <div 
                className=' w-[39%] bg-[#ffd2df] rounded-lg bg-cover flex justify-center'>
                    <img src="/picme.jpeg" alt="" className=' h-full md:h-[400px] rounded-lg' />
            </div>
        </div>

        <div className='mt-2 flex flex-col md:flex-row justify-between'>
            <div className='py-[30px] px-10 w-full mb-2 md:w-[49%] text-gray-600 bg-[#ffd2df] rounded-lg'>
               <h1 className='text-black text-2xl font-slight-bold mb-2 md:mb-3'>Let's Connect !</h1>
               
               <div className='flex flex-col sm:flex-row justify-between md:flex-col gap-2'>
                <div className="flex md:flex-col gap-1 sm:w-1/2 md:w-full">
                    <p className='bg-[#ff9ab7] p-3 text-[12px] lg:py-2 md:text-sm rounded-lg px-4 cursor-pointer w-1/2 md:w-full'>+918838202521</p>
                    <p className='bg-[#ff9ab7] p-3 lg:py-2 rounded-lg px-4 cursor-pointer w-1/2 md:w-full'>Mail</p>
                </div>

                <div className="flex md:flex-col gap-1 sm:w-1/2 md:w-full">
                <p className='bg-[#ff9ab7] p-3 rounded-lg lg:py-2 px-4 cursor-pointer w-1/2 md:w-full'>GitHub</p>
               <p className='bg-[#ff9ab7] p-3 rounded-lg lg:py-2 px-4 cursor-pointer w-1/2 md:w-full'>LinkedIn</p>
               
                </div>
               
               
               </div>
               <p></p>
            </div>
            <div className='rounded-lg p-4 py-6 w-full md:w-1/2 bg-[#ff9ab7]'>
                <h1 className='text-2xl font-slight-bold px-3'>Contact me</h1>
                <form className='mt-3 px-3' >
                    <div className='md:mt-5'>

                    
                    <div className="flex w-full justify-between">
                    <input type="text" placeholder='Name' className='w-[49%] p-1 px-2 text-sm rounded my-1' />
                    <input type="email" placeholder='Email' className='w-[50%] p-1 px-2 text-sm rounded my-1' />
                    
                    </div>
                    
                    <textarea placeholder='Message' rows={3} className='w-full p-1 px-2 text-sm rounded my-1'></textarea>
                    <button type='submit' className='bg-[#ffd2df] p-2 rounded w-full'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default HeroLeft