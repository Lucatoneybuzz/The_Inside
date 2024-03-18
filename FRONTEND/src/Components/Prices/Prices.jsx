// PricingPage.jsx

import React, { useState } from 'react';
import Modal from './Modal';
import PriceCard from './PriceCard';
import Expertise from '../Expertise/Expertise';


const PricingPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleRequestCallback = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-7xl font-extrabold my-32 ml-4 text-red-950">Our Prices</h1>
      <div className="grid grid-cols-3 gap-4">
        <PriceCard
          title="STANDARD"
          price="$99/month"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at sem vitae libero placerat ullamcorper."
          onClick={handleRequestCallback}
        />
        <PriceCard
          title="BUSINESS"
          price="$149/month"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at sem vitae libero placerat ullamcorper."
          onClick={handleRequestCallback}
        />
        <PriceCard
          title="PROFFESIONAL"
          price="$199/month"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at sem vitae libero placerat ullamcorper."
          onClick={handleRequestCallback}
        />
      </div>
      {showModal && <Modal onClose={handleCloseModal} />}
      <Expertise/>
    </div>
  );
};

export default PricingPage;
