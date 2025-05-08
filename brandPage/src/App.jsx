import React from 'react'

import "./App.css"
import Navbar from './components/Navbar';
import HeroSection from './HeroSection';

const App = () => {
  return (
    <div className='container'>

      <Navbar />

      <HeroSection />

    </div>
  )
}

export default App