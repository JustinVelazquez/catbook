import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/upload">Upload</Link>
        </li>
        <li>
          <Link to="/edit">edit</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar
