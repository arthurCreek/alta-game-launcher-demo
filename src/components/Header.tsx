import React from 'react';
import { FaUsers, FaBell, FaCog, FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="py-4 px-2 flex justify-around items-center nav alta-gray-bg font-semibold font-sans text-2xl">
      <div className="flex w-64">
        <FaUsers className="alta-white text-3xl" />
        <FaBell className="alta-white text-3xl" />
        <Link to="/profile">
          <FaCog className="alta-white text-3xl" />
        </Link>
      </div>

      <div>
        <Link className="alta-white" to="/">Home</Link>
        <Link className="alta-white" to="/shop">Shop</Link>
        <Link className="alta-white" to="/vault">Vault</Link>
        <Link className="alta-white" to="/supporter">Supporter</Link>
      </div>

      <div>
        <Link className="alta-white" to="/profile">
          <FaQuestion className="" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
