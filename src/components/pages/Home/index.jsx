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
import Contacts from './Contacts.jsx'
import Footer from '../../common/Footer.jsx'
import Gallery from './Gallery.jsx'
import Insurance from './Insurance.jsx'
import Offers from './Offers.jsx'
import BlogTeasers from './BlogTeasers.jsx'
import EmergencyBanner from './EmergencyBanner.jsx'
import PatientJourney from './PatientJourney.jsx'
import Pricing from './Pricing.jsx'
const HomePage = () => {
  return (
    <>
     <div className="min-h-screen bg-background">
      
      <main className="relative">
        <Hero />
        <HomeTexts/>
        <Stats/>
        <Slider/>
        <Services/>
        <EmergencyBanner />
        <Gallery />
        <Carousel/>
        <Excellence />
        <PatientJourney />
        <Solution />
        <Insurance />
        <Offers />
        <Pricing />
        <BlogTeasers />
        <FAQ />
        <Contacts />
      </main>
    </div>
    </>
  )
}

export default HomePage