import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const Modal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || phone === '') {
      setShowNotification(true);
    } else {
      setLoading(true);
      // Simulate a delay before notifying the admin
      setTimeout(() => {
        setLoading(false);
        console.log('Name:', name);
        console.log('Phone:', phone);
        onClose();
      }, 2000); // Simulate a 2-second delay
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg relative">
        <button onClick={onClose} className="absolute top-0 right-0 m-4">
          <IoClose />
        </button>
        <h2 className="text-2xl font-bold mb-4">Request Callback</h2>
        <p className="text-gray-600 mb-4">We can call you in 30 seconds, just enter your number below.</p>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2" htmlFor="name">
            Name <span className="text-gray-400">(optional)</span>:
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-400 px-2 py-1 rounded-md w-full"
            />
          </label>
          <label className="block mb-2" htmlFor="phone">
            Phone Number:
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-400 px-2 py-1 rounded-md w-full"
            />
          </label>
          {showNotification && <p className="text-red-500">Please fill in all fields.</p>}
          <p className="text-gray-500 text-sm mb-4">Your number is safe with us. 😊</p>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            {loading ? 'Loading...' : 'Request'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
