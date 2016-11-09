import React, { Component } from 'react';
import  { Link } from 'react-router';

export default class MobileHeader extends Component {

  render() {
    return (
      <div className='mobile-header'>
        <h2><Link to="/" className='sg'>Susan Graham</Link></h2>
        <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">About
          <span className="caret"></span></button>
          <ul className="dropdown-menu pull-right">
            <li><Link to="/app" className='link'>About</Link></li>
            <li><Link to="/app/projects" className='link'>Projects</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
