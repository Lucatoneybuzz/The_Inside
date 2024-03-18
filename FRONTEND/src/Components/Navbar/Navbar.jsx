import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assests/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <div className='nav-logo'>
        <img className='w-40 mt-5 ml-9 ' src={logo} alt="" />
      </div>
      <div className='nav-list'>
        <ul className='text-center flex space-x-10 justify-end -mt-7 mr-20'>
          <li className="mr-4">
            <Link to='/' className="nav-link">Home</Link>
          </li>
          <li className="relative group mr-4">
            <div className="nav-link group-hover:bg-gray-200">
              <Link to='/about'>About</Link>
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-md py-2 rounded-md mt-2 w-32 text-left">
              <Link to='/blog' className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-200">Blog</Link>
              <Link to='/prices' className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-200">Prices</Link>
              <Link to='/our-team' className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-200">Our team</Link>
              <Link to='/mission' className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-200">Mission</Link>
              <Link to='/testimonials' className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-200">Testimonials</Link>
            </div>
          </li>
          <li className="mr-4">
            <Link to='/services' className="nav-link">Services</Link>
          </li>
          <li className="mr-4">
            <Link to='/portfolio' className="nav-link">Portfolio</Link>
          </li>
          <li className="mr-4">
            <Link to='/faqs' className="nav-link">FAQs</Link>
          </li>
          <li>
            <Link to='/contact' className="nav-link">Contact</Link>
          </li>
          <Link to='/login' className="inline-block px-4 py-1 bg-orange-900 text-white hover:bg-inside-brown rounded-full -mt-1 transition-all duration-300 ease-in-out">Login</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
