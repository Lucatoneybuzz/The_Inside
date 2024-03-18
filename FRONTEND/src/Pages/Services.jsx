// Inside Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ServicesData from '../Components/Services/ServiceData';

const Services = () => {
  return (
    <div>
      <h1 className="about-title text-7xl font-extrabold mt-16 ml-12 text-red-950">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-32 ml-10 mr-10">
        {ServicesData.map(service => (
          <div key={service.id}>
            <img className="w-full  overflow-hidden shadow-lg" src={service.imageUrl} alt={service.title} />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{service.title}</h2>
              <p className="text-sm">{service.description}</p>
              <Link to={service.moreInfo} className="block mt-4 text-center text-red-950 py-2 px-4  hover:text-red-700 transition duration-300">Read more</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
