import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Portfolio from './Pages/Portfolio'
import Services from './Pages/Services'
import FAQs from './Pages/FAQs'
import LoginSignUp from './Pages/LoginSignUp'
import ShopTheInside from './Pages/ShopTheInside'
import Footer from './Components/Footer/Footer'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import ContactIcon from './Components/ContactIcon/ContactIcon'
import TeamBio from './Components/Team/TeamBio'
import PricesPage from './Components/Prices/Prices'
import OurTeam from './Components/Team/OurTeam'
import Mission from './Components/Mission/Mission'
import Testimonials from './Components/Testimonials/Testimonials'
import Painting from './Pages/ServicePages/Painting'
import Flooring from './Pages/ServicePages/Flooring'
import Electrical from './Pages/ServicePages/Electrical'
import Pop from './Pages/ServicePages/Pop'
import Bespoke from './Pages/ServicePages/Bespoke'
import Window from './Pages/ServicePages/Window'
import Shopping from './Pages/ServicePages/Shopping'
import Cleaning from './Pages/ServicePages/Cleaning'
import s









function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/> 
          <Route path='/about' element={<About />}/> 
          <Route path="/team/:id" element={<TeamBio />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path='/our-team' element={<OurTeam/>}/>
          <Route path='/mission' element={<Mission/>}/>
          <Route path='/testimonials' element={<Testimonials/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/services' element={<Services/>}/> 
          <Route path='/services/painting' element={<Painting/>}/> 
          <Route path='/services/flooring' element={<Flooring/>}/>
          <Route path='/services/electrical' element={<Electrical/>}/>
          <Route path='/services/pop' element={<Pop/>}/>
          <Route path='/services/bespoke' element={<Bespoke/>}/>
          <Route path='/services/window' element={<Window/>}/>
          <Route path='/services/shopping' element={<Shopping/>}/>
          <Route path='/services/cleaning' element={<Cleaning/>}/>
          <Route path='/faqs' element={<FAQs/>}/>
          <Route path='/contact' element={<Contact />}/> 
          <Route path='/login' element={<LoginSignUp/>}/> 
          <Route path='/signup' element={<SignUp/>}/> 
          <Route path='/Shop' element={<ShopTheInside />}/> 
        </Routes>
      </div>
      <Footer/>
      <ContactIcon/>
      <ScrollToTop/>
    </Router>
  )
}

export default App
