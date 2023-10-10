import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import img from '../assets/home.png'

const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side - Logo */}
        <div>
          <img src={img} alt="" className='h-14 w-14'/>
        </div>

        {/* Center - Search Form with React Search Icon */}
        <form className="mx-4 relative">
          <input
            type="text"
            placeholder="Search"
            className="w-[300px] px-4 py-2 border shadow-md rounded-md focus:outline-none focus:border-blue-500"
          />
          <div className="absolute right-4 top-2 text-gray-500">
            <FaSearch size={20} />
          </div>
        </form>

        {/* Right side - Menu and Login */}
        <div className="flex items-center">
          <ul className="flex space-x-4 ">
            <li>Home</li>
            <li>About</li>
            {/* Add more menu items as needed */}
          </ul>

          {/* Login Icon */}
          <div className="ml-4 text-slate-600">
            <FaUserCircle size={24} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
