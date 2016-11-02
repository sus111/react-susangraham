import React, { Component } from 'react';

export default class RoadToCode extends Component {

  render(){
    return (
      <div className='col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1'>
        <h2 className='project-title'>Road to Code</h2>
        <p>Javascript front-end, Ruby back-end</p>
        <a href="http://slides.com/roadtocode/deck/fullscreen#/1">
        <img className='project-pic img-responsive' src='/src/images/road_to_code.jpg'></img></a>
        <p>View <a href='https://github.com/road-to-code/road-to-code'>code on github</a></p>
      </div>
    )
  }
}
