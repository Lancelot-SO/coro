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
import RedAbout from './pages/RedAbout'
import RedProduct from './pages/RedProduct'
import RedInsights from './pages/RedInsights'
import RedDetailOne from './components/RedDetailOne'
import RedCareers from './pages/RedCareers'
import RedContact from './pages/RedContact'
import RedService from './pages/RedService'
import RedProductDetails from './pages/RedProductDetails'
import Feedback from './components/FeedBack'
import { useEffect, useState } from 'react'



function App() {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  useEffect(() => {
    const isModalShown = localStorage.getItem('isFeedbackModalShown');
    if (!isModalShown) {
      const timer = setTimeout(() => {
        setShowFeedbackModal(true);
        localStorage.setItem('isFeedbackModalShown', 'true');
      }, 30000); // 30 seconds

      return () => clearTimeout(timer);
    }
  }, []);

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
          <Route path='/redabout' element={<RedAbout />} />
          <Route path='/redproduct' element={<RedProduct />} />
          <Route path='/redinsights' element={<RedInsights />} />
          <Route path='/reddetailone' element={<RedDetailOne />} />
          <Route path='/redcareers' element={<RedCareers />} />
          <Route path='/redcontact' element={<RedContact />} />
          <Route path='/redservices' element={<RedService />} />
          <Route path='/redproductdetails' element={<RedProductDetails />} />
          <Route path="/redproductdetails/*" element={<RedProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Feedback showModal={showFeedbackModal} setShowModal={setShowFeedbackModal} />

    </div>
  )
}

export default App
