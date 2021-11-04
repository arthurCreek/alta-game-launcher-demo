import React from 'react';
import { FaUsers, FaBell, FaCog, FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="nav">
      <div className="nav-icons">
        <FaUsers className="nav-icon" />
        <FaBell className="nav-icon" />
        <Link to="/profile">
          <FaCog className="nav-icon" />
        </Link>
      </div>

      <div className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/vault">Vault</Link>
        <Link to="/supporter">Supporter</Link>
      </div>

      <div className="nav-faq">
        <Link to="/profile">
          <FaQuestion className="nav-icon-small" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
