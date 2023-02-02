import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="main-nav">
    <a className="brand" href="/">React Bookstore</a>
    <ul className="navigation">
      <li><Link to="/">Books</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </ul>
    <span className="avatar-icon">
      <FaUserAlt />
      {' '}
    </span>
  </nav>
);

export default Navigation;
