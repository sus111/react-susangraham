import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className='header'>
      <div className='name-title'>
        <h2 className='susan-graham'>Susan Graham</h2>
        <h3 className='fed'>Front-End Developer</h3>
      </div>
      <div className='links'>
        <Link to="/" className='link'>About</Link>
        <Link to="/projects" className='link'>Projects</Link>
        <Link to="/skills" className='link'>Skills</Link>
      </div>
      <div className='logos'>
        <a target="_blank" href='mailto:sgraham535@gmail.com'>
        <img className='logo email-logo' src='/src/images/email_logo.svg'/></a>
        <a target="_blank" href='https://github.com/sus111'><img className='logo' src='/src/images/github_logo.svg'/></a>
        <a target="_blank" href='https://uk.linkedin.com/in/susan-graham-031354a7'>
        <img className='logo' src='/src/images/linkedin_logo.svg'/></a>
      </div>
    </div>
  );
}

export default Header;
