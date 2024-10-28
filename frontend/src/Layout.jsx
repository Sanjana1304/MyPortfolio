import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'

const Layout = () => {
  return (
    <div className='m-2'>
        <Header/>
        <Hero/>
        <Projects/>
        <Experience/>
        
    </div>
  )
}

export default Layout