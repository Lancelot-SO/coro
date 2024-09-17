import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PurpleHome from './pages/PurpleHome'
import PurpleNavbar from './components/PurpleNavbar'
import RedHome from './pages/RedHome'
import PurpleAbout from './pages/PurpleAbout'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <BrowserRouter>
        <PurpleNavbar />
        <Routes>
          <Route path='/' element={<PurpleHome />} />
          <Route path='/purpleabout' element={<PurpleAbout />} />
          <Route path='/redhome' element={<RedHome />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
