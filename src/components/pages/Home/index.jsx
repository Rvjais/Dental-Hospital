import React from 'react'
import Header from './../../common/Header.jsx'
import Hero from './Hero.jsx'
import Stats from './Stats.jsx'
import Slider from './Slider.jsx'
const HomePage = () => {
  return (
    <>
     <div className="min-h-screen bg-background">
      <Header />
      <main className="relative">
        <Hero />
        <Stats/>
        <Slider/>
      </main>
    </div>
    </>
  )
}

export default HomePage