import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import More from './components/More'

const Layout = () => {
  return (
    <div className='m-2'>
        <Header/>
        <Hero/>
        <Projects/>
        <Experience/>
        <More/>
        <Footer/>
        
    </div>
  )
}

export default Layout