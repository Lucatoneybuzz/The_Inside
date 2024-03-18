import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication
    if (formData.email === 'user@example.com' && formData.password === 'password') {
      // Log in logic here
      console.log('Logging in with:', formData);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-5 pb-8 mb-24" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={handleShowPassword}
            >
              {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
            </button>
          </div>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </div>
        <div className="mb-6 flex items-center">
          <input
            id="rememberMe"
            name="rememberMe"
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            checked={rememberMe}
            onChange={handleRememberMe}
          />
          <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">Remember Me</label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-red-950 hover:bg-red-800 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-red-950 hover:text-red-800"
            to="/forgot-password"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
      <div className="mt-64">
        <Link
          className="inline-block align-baseline font-bold text-sm text-red-950 hover:text-red-800"
          to="/signup"
        >
          Create an Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
