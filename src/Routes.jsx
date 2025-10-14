import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/pages/Home/index.jsx'

const AppRoutes = () => {
  return (
    <>
<BrowserRouter>
<Routes>
 <Route path='/' element={<HomePage/>} />
</Routes>
</BrowserRouter>
    </>
  )
}

export default AppRoutes