import React from 'react';
import { Link } from 'react-router-dom';

const Projects = ({ image, title, description }) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover object-center" />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 text-base">{description}</p>
          <Link to="/gallery" className="mt-4 block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View Gallery</Link>
        </div>
      </div>
      
    </div>
  );
};

export default Projects;
