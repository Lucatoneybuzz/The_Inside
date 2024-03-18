import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css'


const TeamCard = ({ member }) => {
  return (
    <Link to={`/team/${member.id}`}>
      <div className="team-member-card">
        <img src={member.image} alt={member.name} />
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
    </Link>
  );
};

export default TeamCard;
