import React, { Component } from 'react';

export default class RoadToCode extends Component {

  render(){
    return (
      <div className='road-code'>
        <div className='project col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1'>
          <h2 className='project-title'>Road to Code</h2>
          <p className='tech'>JAVASCRIPT | RUBY | SINATRA | JASMINE | ZOMBIE</p>
          <p className='subtitle-blue'>Teaches children the basics of programming</p>
          <a href="http://slides.com/roadtocode/deck/fullscreen#/1">
          <img className='project-pic img-responsive' src='/src/images/road_to_code.jpg'></img></a>
          <p className='subtitle-light-blue'>View <a className='subtitle-light-blue' href='https://github.com/road-to-code/road-to-code'>code on github</a></p>
          <p className='project-description'>This was my two-week final project I made at Makers Academy. The idea of the game is to introduce children to two basic concepts of programming: state and behaviour. Players can alter the state of the game (including the colour of the playing board and the layout of the emojis) as well as the behaviour of the character through a series of programmed instructions.</p>
        </div>
      </div>
    )
  }
}
