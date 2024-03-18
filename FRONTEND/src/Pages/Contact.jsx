import React from 'react';
import bespoke1 from '../Components/Assests/bespoke1.jpg';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send notification to admin
    alert('Message sent to admin');
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="about-title text-7xl font-extrabold mt-16 text-red-950">Contact Us</h1>
      <div className="flex flex-wrap items-center justify-between mt-10">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-10">
          <img src={bespoke1} alt="Office" className="rounded-lg mb-6" />
          <div className="mb-6">
            <h2 className="text-xl font-bold">Our Office</h2>
            <p>123 Main Street, Lagos, Nigeria</p>
            <p>Phone: +234 123 4567</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158511.1842084081!2d3.318503490731173!3d6.524379609133442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e5e36e6c2a7%3A0x4552f2b8cd7b9fc9!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1648261560120!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="block mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4" required />
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4" required />
            <label htmlFor="phone" className="block mb-2">Phone Number</label>
            <input type="text" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4" required />
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4" required></textarea>
            <button type="submit" className="bg-red-950 text-white py-2 px-4 rounded-lg hover:bg-red-800">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
