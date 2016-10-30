import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className='header'>
      <div>
        <h2 className='susan-graham'>Susan Graham</h2>
        <h3>Front-End Developer</h3>
      </div>
      <div>
        <Link to="/">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
      </div>
    </div>
  );
}

export default Header;
