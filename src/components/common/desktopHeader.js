 import React, { Component } from 'react';
import  { Link } from 'react-router';

export default class DesktopHeader extends Component {

  render() {
    return (
      <div className='main-header row'>
        <div className='name-title col-xs-4'>
          <h2 className='susan-graham'><Link to="/" className='susan-graham'>Susan Graham</Link></h2>
          <br></br>
          <h3 className='fed-header'><Link to="/" className='fed-header'>Front-End Developer</Link></h3>
        </div>
        <div className='links col-xs-4'>
          <Link to="/app" className='link'>About</Link>
          <Link to="/app/projects" className='link'>Projects</Link>
        </div>
        <div className='logos col-xs-4'>
          <a target="_blank" href='mailto:sgraham535@gmail.com'>
          <img className='logo email-logo' src='/src/images/email_logo.svg'/></a>
          <a target="_blank" href='https://github.com/sus111'><img className='logo' src='/src/images/github_logo.svg'/></a>
          <a target="_blank" href='https://uk.linkedin.com/in/susan-graham-031354a7'>
          <img className='logo' src='/src/images/linkedIn_logo.svg'/></a>
        </div>
      </div>
    );
  }
}
