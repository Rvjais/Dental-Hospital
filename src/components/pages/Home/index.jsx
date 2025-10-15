import React from 'react'
import Header from './../../common/Header.jsx'
import Hero from './Hero.jsx'
import Stats from './Stats.jsx'
import Slider from './Slider.jsx'
import Services from './Services.jsx'
import Carousel from './Crousel.jsx'
import HomeTexts from './HomeTexts.jsx'
import Solution from './Solution.jsx'
import Excellence from './Excellence.jsx'
import FAQ from './FAQ.jsx'
const HomePage = () => {
  return (
    <>
     <div className="min-h-screen bg-background">
      <Header />
      <main className="relative">
        <Hero />
        <HomeTexts/>
        <Stats/>
        <Slider/>
        <Services/>
        <Carousel/>
        <Excellence />
        <Solution />
        <FAQ />
      </main>
    </div>
    </>
  )
}

export default HomePage