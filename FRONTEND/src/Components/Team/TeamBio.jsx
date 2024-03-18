import React from 'react';
import { useParams } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import the icons
import teamMembers from './TeamMembers';
import './Team.css'
 

const TeamBio = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === parseInt(id));
console.log();
  return (
    <div className="team-member-description">
      <h2>{member.name}</h2>
      <p>{member.role}</p>
      <img src={member.image} alt={member.name} />
      <p>{member.bio}</p>
      <div className="social-media-icons">
        <a href={member.socials.facebook}><FaFacebook /></a>
        <a href={member.socials.twitter}><FaTwitter /></a>
        <a href={member.socials.linkedin}><FaLinkedin /></a>
      </div>
    </div>
  );
};

export default TeamBio;
