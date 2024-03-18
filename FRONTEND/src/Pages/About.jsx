import React from 'react';
import img8 from '../Components/Assests/img8.jpg'
import Expertise from '../Components/Expertise/Expertise'
import MainFacts from '../Components/MainFacts/MainFacts'
import TeamCard from '../Components/Team/TeamCard';
import teamMembers from '../Components/Team/TeamMembers';





const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title text-7xl font-extrabold mt-36 ml-16 text-red-950">About Us</h1>
      <p className="about-summary text-lg mt-5 ml-40 text-gray-500 text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, torto <br/> eu 
        tempor fermentum, elit augue lacinia velit, <br/> nec accumsan lorem elit eget lectus. Ut
        tincidunt  <br/> ligula ut odio lobortis, in ultricies purus lobortis.
      </p>
      <div className="home-decor-image-container mt-24 flex justify-center">
        <img src={img8} alt="Home Decor" className="w-screen h-96 object-cover" />
      </div>
      <div>
        <Expertise/>
        <MainFacts/>
      </div>
      <div className="team-member-cards">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
      </div>
  );
}

export default About;
