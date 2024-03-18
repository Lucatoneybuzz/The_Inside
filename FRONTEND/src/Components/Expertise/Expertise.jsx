import React from 'react';

const Expertise = () => {
  return (
    <div className="py-10 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <h3 className="text-xl font-bold mb-2">Expertise</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula purus sed nisl dictum, eu auctor turpis ultrices. Suspendisse potenti. Integer sit amet purus non sapien consectetur gravida.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <h3 className="text-xl font-bold mb-2">Sustainability</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula purus sed nisl dictum, eu auctor turpis ultrices. Suspendisse potenti. Integer sit amet purus non sapien consectetur gravida.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <h3 className="text-xl font-bold mb-2">Approach</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula purus sed nisl dictum, eu auctor turpis ultrices. Suspendisse potenti. Integer sit amet purus non sapien consectetur gravida.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
