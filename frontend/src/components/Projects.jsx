import React, { useState } from 'react'
import Carousel from './Carousel'

const Projects = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
  
    return (
    <div id='projects' className=' mt-2 p-3 gradient-anim-3 rounded-lg '>
        <h1 className='text-4xl mb-6 font-bold px-5'>Projects</h1>
        <div className="flex flex-col xl:flex-row justify-around">
            <Carousel onHover={setHoveredItem}/>
            <div className='shadow-lg w-[85%] mx-auto xl:w-[44%] p-5 py-10 flex justify-center items-center'>
                {hoveredItem ? (
                    <p>
                        {hoveredItem === 1
                            ?   <>
                                    <h1 className='font-bold text-xl'>BookAStay - Hotel Booking App</h1>
                                    <p className='text-sm'>BookAStay is a hotel booking application built with the MERN stack, allowing users to book hotels based on preferences like price, amenities, and hotel type. It provides a user dashboard to track stays, upcoming bookings, and past reservations, while hotel owners get insights through an analytics dashboard to monitor revenue and booking rates. The app features a sleek design using TailwindCSS for a smooth, modern user experience.</p>
                                    <div className="flex">
                                        <button>
                                            View Code
                                        </button>
                                        
                                        <button>
                                            View App
                                        </button>
                                    </div>
                                </>
                            : hoveredItem === 2
                            ? 'Description for item 2'
                            : hoveredItem === 3
                            ? 'Description for item 3'
                            : hoveredItem === 4
                            ? 'Description for item 4'
                            : hoveredItem === 5
                            ? 'Description for item 5'
                            : hoveredItem === 6
                            ? 'Description for item 6'
                            : hoveredItem === 7
                            ? 'Description for item 7'
                            : hoveredItem === 8
                            ? 'Description for item 8'
                            : hoveredItem === 9
                            ? 'Description for item 9'
                            : 'Default description'
                        }
                    </p>
                ) : (
                    <p className='font-bold'>
                        HOLD AND MOVE THE MOUSE TO ROTATE THE CAROUSEL AND HOVER OVER AN ITEM IN THE CAROUSEL TO SEE THE PROJECT DESCRIPTION.
                    </p>
                )}
            </div>
        </div>
        
    </div>
  )
}

export default Projects