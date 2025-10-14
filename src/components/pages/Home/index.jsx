import React from 'react'
import Header from './../../common/Header.jsx'
import Hero from './Hero.jsx'
const HomePage = () => {
  return (
    <>
     <div className="min-h-screen bg-background">
      <Header />
      <main className="relative">
        <Hero />
      </main>

     
    </div>
    </>
  )
}

export default HomePage