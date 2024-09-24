import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PurpleHome from './pages/PurpleHome'
import PurpleNavbar from './components/PurpleNavbar'
import RedHome from './pages/RedHome'
import PurpleAbout from './pages/PurpleAbout'
import Footer from './components/Footer'
import PurpleProduct from './pages/PurpleProduct'
import PurpleProductDetails from './pages/PurpleProductDetails'
import PurpleCareers from './pages/PurpleCareers'
import PurpleContact from './pages/PurpleContact'
import PurpleInsights from './pages/PurpleInsights'
import DetailOne from './components/DetailOne'
import PurpleService from './pages/PurpleService'
import WhistleBlowing from './pages/WhistleBlowing'


function App() {

  return (
    <div>
      <BrowserRouter>
        <PurpleNavbar />
        <Routes>
          <Route path='/' element={<PurpleHome />} />
          <Route path='/purpleabout' element={<PurpleAbout />} />
          <Route path='/purpleproduct' element={<PurpleProduct />} />
          <Route path='/purpleproductdetails' element={<PurpleProductDetails />} />
          <Route path="/purpleproductdetails/*" element={<PurpleProductDetails />} />
          <Route path='/purplecareers' element={<PurpleCareers />} />
          <Route path='/purplecontact' element={<PurpleContact />} />
          <Route path='/purpleinsights' element={<PurpleInsights />} />
          <Route path='/purpledetailone' element={<DetailOne />} />
          <Route path='/purpleservices' element={<PurpleService />} />
          <Route path='/purplewhistle' element={<WhistleBlowing />} />
          <Route path='/redhome' element={<RedHome />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
