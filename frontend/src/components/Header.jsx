import React, { useState } from 'react'

const Header = () => {

    const [expanded, setExpanded] = useState(false);
    
  return (
    <header className="border gradient-anim-3 py-4 rounded-lg sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex">
                <span className='text-xl font-semibold'>SANJANA S ACHARYA</span>
            </div>

            {/* Mobile Menu(Hamburger) Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-white"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {!expanded ? (
                  <span aria-hidden="true">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </span>
                ) : (
                  <span aria-hidden="true">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className=" hidden md:flex md:items-center space-x-8 lg:ml-15 lg:space-x-10">
              <a 
              href='#projects'
                className="text-sm font-normal text-gray-600 transition hover:text-black"
              >
                 PROJECTS
              </a>
              <a 
              href='#experience'
              className="text-sm font-normal text-gray-600 transition hover:text-black">
              EXPERIENCE
              </a>
              <a className="text-sm font-normal text-gray-600 transition hover:text-black">
                CONTACT
              </a>
              
            </nav>


          </div>

          {/* Mobile Menu */}
          {expanded && (
            <nav className="mt-4">
              <div className="flex flex-col pt-8 pb-4 space-y-6">
                <a 
                href='#projects'
                 
                    className="text-sm font-normal text-gray-600 transition hover:text-black"
                    
                
                >
                  PROJECTS
                
                </a>

                <a 
                 href='#experience'
                  className="text-sm font-normal text-gray-600 transition hover:text-black"
                  role='button'
                >
                EXPERIENCE
                
                </a>

                <a 
                  className="text-sm font-normal text-gray-600 transition hover:text-black"
                  role='button'
                >
                
                CONTACT
                </a>

               
              </div>
            </nav>
          )}
        </div>
      </header>
  )
}

export default Header