import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../Assests/img1.jpg'
import './More.css'

const More = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="md:w-1/2">
            <img className='more-img' src={img1} alt="Feature Image"/>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-h">Design <br /> Inspired <br />By <br />Art.</h1>
            <p className="text-p">We offer and perform <br /> creative and elegant ideas <br /> for the most beautiful <br />interior performing. Our <br /> responsibility is to create <br />your dream interior, so you <br />could feel yourself <br /> comfortable and calm in a <br /> new space..</p>
            <Link className='link' to="/more-info">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
