import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/pages/Home/index.jsx'
import AboutPage from './components/pages/About/index.jsx'

const AppRoutes = () => {
  return (
    <>
<BrowserRouter>

<Routes>
 <Route path='/' element={<HomePage/>} />
 <Route path='/about' element={<AboutPage/>} />
</Routes>
</BrowserRouter>
    </>
  )
}

export default AppRoutes