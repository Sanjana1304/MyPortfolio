import React from 'react'

const Footer = () => {
  return (
    <footer class="gradient-anim-3 rounded-lg mt-2 p-2">
    <div class=" text-center text-gray-600">
        
        <p class="mt-2 ">MERN Stack Developer | B.Tech CSE - Data Science</p>
        <div className='flex gap-2 justify-center'>
            <a href="#projects" class="hover:text-white transition duration-300">GitHub</a>
            <a href="#about" class="hover:text-white transition duration-300">LinkedIn</a>
            <a href="#contact" class="hover:text-white transition duration-300">Mail</a> 
        </div>
        <p>&copy; 2024 Sanjana S Acharya. All rights reserved.</p>
    </div>
</footer>

  )
}

export default Footer