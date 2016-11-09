import React, { Component } from 'react';

export default class Codey extends Component {

  render() {
    return(
      <div className='codey'>
        <div className='project col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1'>
          <h2 className='project-title'>Codey Gonzalez</h2>
          <p className='tech'>JAVASCRIPT | JQUERY | RUBY | RAILS | CAPYBARA</p>
          <p className='subtitle-pink'>Practice typing code fast with Codey Gonzalez!</p>
          <a target="_blank" href='https://codey-gonzalez.herokuapp.com/'>
          <img className='project-pic img-responsive' src='/src/images/codey_gonzalez.jpg'></img></a>
          <p className='subtitle-light-blue'>View <a className='subtitle-light-blue' target="_blank" href='https://github.com/sus111/codey-gonzalez'>code on github</a></p>
          <p className='project-description'>I made this typing game while at Makers Academy, in a team of five during a three-day hackathon.</p>
        </div>
      </div>
    )
  }
}
