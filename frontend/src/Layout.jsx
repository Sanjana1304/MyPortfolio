import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'

const Layout = () => {
  return (
    <div className='m-2'>
        <Header/>
        <Hero/>
        <Experience/>
    </div>
  )
}

export default Layout