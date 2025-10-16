import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes  from './Routes.jsx'
import Header from './components/common/Header.jsx'
import Footer from './components/common/Footer.jsx'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
    <AppRoutes />
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App