import React from 'react';

const MainFacts = () => {
  return (
    <div className="py-10 bg-gray-100 mt-24">
      <div className="container mx-auto text-center">
        <h2 className="text-7xl font-bold">Main Facts</h2>
        <div className="flex justify-center mt-8">
          <div className="m-10">
            <h3 className="text-5xl font-extrabold mb-4  text-gray-500">Projects</h3>
            <p className="text-4xl font-semibold text-gray-500">100</p>
          </div>
          <div className="m-10">
            <h3 className="text-5xl font-extrabold mb-4  text-gray-500">Happy Clients</h3>
            <p className="text-4xl  font-semibold  text-gray-500">500</p>
          </div>
          <div className="m-10">
            <h3 className="text-5xl font-extrabold mb-4  text-gray-500">Designs</h3>
            <p className="text-4xl font-semibold  text-gray-500">1000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFacts;
