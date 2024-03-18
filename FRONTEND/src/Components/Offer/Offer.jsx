import React, { useState } from 'react';

const Offer = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Interior Design',
      image: 'interior_design_image.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Space Management',
      image: 'space_management_image.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      title: 'Remodeling',
      image: 'remodelling_image.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const handleClick = (id) => {
    if (selectedService === id) {
      setSelectedService(null);
    } else {
      setSelectedService(id);
    }
  };

  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">What We Offer</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {services.map((service) => (
            <div key={service.id} className="md:w-1/3">
              <div
                className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
                onClick={() => handleClick(service.id)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  {selectedService === service.id && (
                    <>
                      <p className="text-gray-600">{service.description}</p>
                      <button className="mt-4 block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Learn More
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
