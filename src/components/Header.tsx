

import React, { useEffect } from 'react';
import { FaUsers, FaBell, FaCog, FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {

  useEffect(() => {
    console.log('te')
  })

  return (
    <div className="py-4 px-2 flex justify-between items-center nav alta-gray-bg font-semibold font-sans text-2xl w-screen fixed z-10 top-0">
      <div className="flex w-80 justify-between">
        <Link to="/"><img src={require('../assets/township-logo.png')} alt="Township Tale Logo" className="w-8 h-8 cursor-pointer"/></Link>
        <FaUsers className="alta-white text-3xl" />
        <FaBell className="alta-white text-3xl" />
        <Link to="/profile">
          <FaCog className="alta-white text-3xl" />
        </Link>
      </div>

      <div className="flex flex-shrink w-full justify-around">
        <Link className="alta-white josefin-font" to="/">Home</Link>
        <Link className="alta-white josefin-font" to="/shop">Shop</Link>
        <Link className="alta-white josefin-font" to="/vault">Vault</Link>
        <Link className="alta-white josefin-font" to="/supporter">Supporter</Link>
        <Link className="alta-white josefin-font" to="/collection">Collection</Link>
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
