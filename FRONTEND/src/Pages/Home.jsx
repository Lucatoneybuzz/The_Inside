import React from 'react'
import Hero from '../Components/Hero/Hero'
import More from '../Components/More/More'
import MainFacts from '../Components/MainFacts/MainFacts'
import Projects from '../Components/Projects/Projects'
import Offer from '../Components/Offer/Offer'
import Expertise from '../Components/Expertise/Expertise'
import InteriorImages from '../Components/Images/InteriorImages'
import News from '../Components/News/News'



const Home = () => {
  return (
    <div>
      <Hero/>
      <More/>
      <MainFacts/>
      <Projects/>
      <Offer/>
      <Expertise/>
      <InteriorImages/>
      <News/>
    
    </div>
  )
}

export default Home