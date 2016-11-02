import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class Splash extends Component {

  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log('clicked')
    // const app = ReactDOM.findDOMNode(this).parentNode;
    // const header = app.getElementsByClassName('header-background')[0];
    // header.style.display = 'table';
    // const footer = app.getElementsByClassName('footer')[0];
    // header.style.visibility = 'visible';
  }

  render() {

    return (
      <div className='background'>
        <div className='splash'>
          <div className='title-box'>
            <h2 className='sg-splash'>Susan Graham</h2><br></br>
            <h3 className='fed fed-splash'>Front-End Developer</h3><br></br>
            <Link to="/app/about" className='link-splash' onClick={this.onClick}>About</Link>
            <Link to="/app/projects" className='link-splash' onClick={this.onClick}>Projects</Link>
            <Link to="/app/skills" className='link-splash' onClick={this.onClick}>Skills</Link>
          </div>
        </div>
      </div>
    )
  }
}
