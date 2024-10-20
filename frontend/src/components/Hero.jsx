import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRyt from './HeroRyt'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between mt-2'>
        <div className='w-full md:w-[70%]'>
            <HeroLeft/>
        </div>
        <div className='w-full md:w-[29%]'>
            <HeroRyt/>
        </div>
    </div>
  )
}

export default Hero