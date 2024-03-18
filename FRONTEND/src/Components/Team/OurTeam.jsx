import React from 'react';
import teamMembers from './TeamMembers';
import TeamCard from './TeamCard';


const OurTeam = () => {
  return (
    <div>
      <h1 className='text-7xl font-extrabold mt-32 ml-4 text-red-950'>Our Team</h1>
      <p className="about-summary text-lg mt-12 ml-12 text-gray-500 text-left">
      Each of our team members represents the best talent within their <br/> discipline, bringing a unique point of view to the table. We are committed to fostering a diverse, inclusive workforce.
      </p>
      <div className="team-member-cards">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
