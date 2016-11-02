import React, { Component } from 'react';

export default class Codey extends Component {

  render() {
    return(
      <div className='col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1'>
        <h2 className='project-title'>Codey Gonzalez</h2>
        <p>Javascript front-end, Ruby back-end</p>
        <a target="_blank" href='https://codey-gonzalez.herokuapp.com/'>
        <img className='project-pic img-responsive' src='/src/images/codey_gonzalez.jpg'></img></a>
        <p>View <a href='https://github.com/sus111/codey-gonzalez'>code on github</a></p>
        <p>Practice typing code fast with Codey Gonzalez!</p>
      </div>
    )
  }
}
