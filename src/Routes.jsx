import { BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom'
import HomePage from './components/pages/Home/index.jsx'
import AboutPage from './components/pages/About/index.jsx'
import DentalHome from './components/pages/services/DentalImplant/index.jsx'

const AppRoutes = () => {
return (
<>
<BrowserRouter>
<Routes>
<Route path='/' element={<HomePage/>} />
<Route path='/about' element={<AboutPage/>} />
<Route path='/dental-implant' element={<DentalHome/>} />
</Routes>
</BrowserRouter>
</>
  )
}
export default AppRoutes