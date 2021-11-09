

import React, { useEffect } from 'react';
import { FaUsers, FaBell, FaCog, FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {

  useEffect(() => {
    console.log('te')
  })

  return (
    <div className="py-4 px-2 flex justify-between items-center nav alta-gray-bg font-semibold font-sans text-2xl w-screen">
      <div className="flex w-80 justify-between">
        <img src={require('../assets/township-logo.png')} alt="Township Tale Logo" className="w-8 h-8"/>
        <FaUsers className="alta-white text-3xl" />
        <FaBell className="alta-white text-3xl" />
        <Link to="/profile">
          <FaCog className="alta-white text-3xl" />
        </Link>
      </div>

      <div className="flex flex-shrink w-full justify-around">
        <Link className="alta-white" to="/">Home</Link>
        <Link className="alta-white" to="/shop">Shop</Link>
        <Link className="alta-white" to="/vault">Vault</Link>
        <Link className="alta-white" to="/supporter">Supporter</Link>
      </div>

      <div className="w-40 items-center">
        <Link className="alta-white" to="/profile">
          <FaQuestion className="m-auto" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
