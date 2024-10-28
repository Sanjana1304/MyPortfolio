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
                                    <div className="flex mt-5">
                                        <a href='https://github.com/Sanjana1304/BookAStay' target='_blank' className='mr-5 p-3 rounded-lg lg:py-2 px-4  bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white'>
                                            View Code
                                        </a>
                                        
                                        <a href='https://bookastayapp.netlify.app/' target='_blank' className='mr-5 p-3 rounded-lg lg:py-2 px-4  bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white'>
                                            View App
                                        </a>
                                    </div>
                                </>
                            : hoveredItem === 2
                            ? <>
                            <h1 className='font-bold text-xl'>MediMatch - AI Powered Patient Case Similarity Match</h1>
                            <p className='text-sm'>MediMatch is a AI powered web application that provides users with patient case similarity. Our platform uses state-of-the-art machine learning algorithms to analyze patient data and find similar cases. By leveraging advanced technology, we help medical professionals make more informed decisions and improve patient outcomes.</p>
                            <div className="flex mt-5">
                                <a href='https://github.com/Sanjana1304/Medi-Match' target='_blank' className='mr-5 p-3 rounded-lg lg:py-2 px-4  bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white'>
                                    View Code
                                </a>
                                
                                <a href='https://github.com/Sanjana1304/Medi-Match' target='_blank' className='mr-5 p-3 rounded-lg lg:py-2 px-4  bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white'>
                                    View App
                                </a>
                            </div>
                        </>
                            : hoveredItem === 3
                            ? <>
                            <h1 className='font-bold text-xl'>Netflix Clone</h1>
                            <p className='text-sm'>This Netflix homepage clone replicates the look and feel of the official Netflix landing page using HTML, CSS, and JavaScript. It includes a hero section with a featured movie banner, navigation bar, and a row of popular shows and movies. The design focuses on simplicity and responsiveness, capturing the essence of Netflix's user interface.</p>
                            <div className="flex mt-5">
                                <a href="https://github.com/Sanjana1304/Netflix-Homepage-Clone" target="_blank" className='mr-5 p-3 rounded-lg lg:py-2 px-4  bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white'>
                                    View Code
                                </a>
                                
                                <a href="https://github.com/Sanjana1304/Netflix-Homepage-Clone" target="_blank" className='mr-5 p-3 rounded-lg lg:py-2 px-4  bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white'>
                                    View App
                                </a>
                            </div>
                        </>
                            : hoveredItem === 4
                            ? <>
                            <h1 className='font-bold text-xl'>IDEA</h1>
                            <p className='text-sm'>Introducing IDEA - Intelligent Digital Educational Assist: a Python app with Tkinter GUI. It's inclusive for all, providing a voice assist for the visually impaired. Users interact with modules, increasing engagement. Features include activity tracking, history, a library for saving lectures, and a recommendation system based on past views.</p>
                           <div className="flex mt-5">
                                <a href="https://github.com/Sanjana1304/IDEA" target="_blank" className='mr-5 p-3 rounded-lg lg:py-2 px-4  bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white'>
                                    View Code
                                </a>
                                
                                <a href="https://github.com/Sanjana1304/IDEA" target="_blank" className='mr-5 p-3 rounded-lg lg:py-2 px-4  bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white'>
                                    View App
                                </a>
                            </div>
                        </>
                            : hoveredItem === 5
                            ? <>
                            <h1 className='font-bold text-xl'>Movie Ticket Booking System</h1>
                            <p className='text-sm'>This movie booking application enables users to browse movies and theaters across various cities and book tickets seamlessly. It provides real-time information on showtimes, theater locations, and seat availability, making the booking process smooth and hassle-free. With an intuitive interface, users can quickly select preferred showtimes and seats for an enhanced movie-going experience.</p>
                           <div className="flex mt-5">
                                <a href="https://github.com/Sanjana1304/Movie-Ticket-Booking-System" target="_blank" className='mr-5 p-3 rounded-lg lg:py-2 px-4  bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white'>
                                    View Code
                                </a>
                                
                                <a href="https://github.com/Sanjana1304/Movie-Ticket-Booking-System" target="_blank" className='mr-5 p-3 rounded-lg lg:py-2 px-4  bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white'>
                                    View App
                                </a>
                            </div>
                        </>
                            : hoveredItem === 6
                            ? 
                            <>
                            <h1 className='font-bold text-xl'>Sudoku Solver App</h1>
                            <p className='text-sm'>This Sudoku game offers users two engaging options: they can play a new Sudoku puzzle or input a puzzle of their own and receive an instant solution. With an easy-to-use interface, players can enjoy solving puzzles directly or quickly check solutions for any provided puzzle, enhancing their gameplay and learning experience.</p>
                           <div className="flex mt-5">
                                <a href="https://github.com/Sanjana1304/Sudoku-Solver" target="_blank" className='mr-5 p-3 rounded-lg lg:py-2 px-4  bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white'>
                                    View Code
                                </a>
                                
                                <a href="https://github.com/Sanjana1304/Sudoku-Solver" target="_blank" className='mr-5 p-3 rounded-lg lg:py-2 px-4  bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white'>
                                    View App
                                </a>
                            </div>
                        </>
                            : hoveredItem === 7
                            ? 
                            <>
                            <h1 className='font-bold text-xl'>Recipe Finder & Meal Planner</h1>
                            <p className='text-sm'>A react based recipe finder app which helps users to browse for recipes based on ingredients, dishes and save them for later use. The app also helps users to get a curated meal plan based on their target calories and diet type.</p>
                           <div className="flex mt-5">
                                <a href="https://github.com/Sanjana1304/Recipe-finder-and-Meal-Planner" target="_blank" className='mr-5 p-3 rounded-lg lg:py-2 px-4  bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white'>
                                    View Code
                                </a>
                                
                                <a href="https://recipe-finder-and-meal-planner.netlify.app/" target="_blank" className='mr-5 p-3 rounded-lg lg:py-2 px-4  bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white'>
                                    View App
                                </a>
                            </div>
                        </>
                            : hoveredItem === 8
                            ? 
                            <>
                            <h1 className='font-bold text-xl'>Amazon Clone</h1>
                            <p className='text-sm'>This Amazon clone replicates the core layout and design of the Amazon homepage using HTML, CSS, and JavaScript. It includes a navigation bar with categories, a product display section, and a search bar to simulate browsing for products. The design focuses on delivering a familiar shopping experience, complete with interactive elements and a responsive layout to mimic Amazon’s user-friendly interface.</p>
                           <div className="flex mt-5">
                                <a href="https://github.com/Sanjana1304/AmazonClone" target="_blank" className='mr-5 p-3 rounded-lg lg:py-2 px-4  bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white'>
                                    View Code
                                </a>
                                
                                <a href="https://github.com/Sanjana1304/AmazonClone" target="_blank" className='mr-5 p-3 rounded-lg lg:py-2 px-4  bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white'>
                                    View App
                                </a>
                            </div>
                        </>
                            : hoveredItem === 9
                            ? <>
                            <h1 className='font-bold text-xl'>Resume Builder App</h1>
                            <p className='text-sm'>This React-based Resume Builder app allows users to input their personal and professional details, such as education, skills, work experience, and contact information, to generate a polished resume. Users can choose from multiple customizable templates, ensuring a professional and tailored final product. With real-time previews and easy editing, this app streamlines the resume creation process, making it simple and efficient.</p>
                           <div className="flex mt-5">
                                <a href="https://github.com/Sanjana1304/Resume-Builder-App" target="_blank" className='mr-5 p-3 rounded-lg lg:py-2 px-4  bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white'>
                                    View Code
                                </a>
                                
                                <a href="https://resume-builder-appp.netlify.app/" target="_blank" className='mr-5 p-3 rounded-lg lg:py-2 px-4  bg-gradient-to-b from-pink-400 to-pink-700 hover:from-pink-700 hover:to-pink-400 text-white'>
                                    View App
                                </a>
                            </div>
                        </>
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