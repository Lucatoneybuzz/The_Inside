import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import './Hero.css';
import img1 from '../Assests/img1.jpg';
import img2 from '../Assests/img2.jpg';
import img3 from '../Assests/img3.jpg';
import img4 from '../Assests/img4.jpg';
import img5 from '../Assests/img5.jpg';
import img6 from '../Assests/img6.jpg';

const Hero = () => {
  return (
    <section className="py-5 relative">
     
      <div className="container mx-auto relative z-20">
        <Carousel autoPlay infiniteLoop showThumbs={false} interval={5000} transitionTime={1000} className="h-h w-full">
          <div>
            <img src={img1} alt="Image 1" className="h-h w-full object-cover " />
          </div>
          <div>
            <img src={img2} alt="Image 2" className="h-h w-full object-cover" />
          </div>
          <div>
            <img src={img3} alt="Image 3" className="h-h w-full object-cover" />
          </div>
          <div>
            <img src={img4} alt="Image 4" className="h-h w-full object-cover" />
          </div>
          <div>
            <img src={img5} alt="Image 5" className="h-h w-full object-cover" />
          </div>
          <div>
            <img src={img6} alt="Image 6" className="h-h w-full object-cover" />
          </div>
        </Carousel>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10 "></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-30">
          <h1 className='the-h-text'>...a reflection of you</h1>
          <p className="mt-4 text-lg">...a reflection of you</p>
          <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
