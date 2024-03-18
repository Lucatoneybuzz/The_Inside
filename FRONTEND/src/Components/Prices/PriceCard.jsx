// PriceCard.jsx

import React from 'react';

const PriceCard = ({ title, price, description, onClick }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105 mr-12 ml-12 hover:border-red-900 border border-transparent cursor-pointer overflow-hidden">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-xl my-4">{price}</p>
      <p className="text-sm text-gray-600">{description}</p>
      <button onClick={onClick} className="bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-500 mt-10">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
