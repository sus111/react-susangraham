import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Splash extends Component {

  render() {

    return (
      <div className='background'>
        <div className='splash'>
          <div className='title-box'>
            <h2 className='sg-splash'>Susan Graham</h2><br></br>
            <h3 className='fed fed-splash'>Front-End Developer</h3><br></br>
            <Link to="/app/about" className='link-splash'>About</Link>
            <Link to="/app/projects" className='link-splash'>Projects</Link>
          </div>
        </div>
      </div>
    )
  }
}
