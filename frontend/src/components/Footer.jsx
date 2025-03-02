import React from 'react'

const Footer = () => {
  return (
    <footer class="gradient-anim-3 rounded-lg mt-2 p-2">
    <div class=" text-center text-gray-600">
        
        <p class="mt-2 ">MERN Stack Developer | B.Tech CSE - Data Science</p>
        <div className='flex gap-2 justify-center'>
            <a href="https://github.com/Sanjana1304/" class="hover:text-black transition duration-300">GitHub</a>
            <a href="https://www.linkedin.com/in/sanjana-acharya-a84b03231" class="hover:text-black transition duration-300">LinkedIn</a>
            <a href="mailto:sensanjana072@gmail.com" class="hover:text-black transition duration-300">Mail</a> 
        </div>
        <p>&copy; 2024 Sanjana S Acharya. All rights reserved.</p>
    </div>
</footer>

  )
}

export default Footer