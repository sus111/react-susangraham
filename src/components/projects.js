import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Projects extends Component {

  render(){

    return(
      <div>
        <div className='projects'>
          <div className='col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1'>
            <h2 className='project-title'>Codey Gonzalez</h2>
            <p>Javascript front-end, Ruby back-end</p>
            <a target="_blank" href='https://codey-gonzalez.herokuapp.com/'>
            <img className='project-pic img-responsive' src='/src/images/codey_gonzalez.jpg'></img></a>
            <p>View <a href='https://github.com/sus111/codey-gonzalez'>code on github</a></p>
            <p>Practice typing code fast with Codey Gonzalez!</p>
          </div>
          <div className='col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1'>
            <h2 className='project-title'>Road to Code</h2>
            <p>Javascript front-end, Ruby back-end</p>
            <a href="http://slides.com/roadtocode/deck/fullscreen#/1">
            <img className='project-pic img-responsive' src='/src/images/road_to_code.jpg'></img></a>
            <p>View <a href='https://github.com/road-to-code/road-to-code'>code on github</a></p>
          </div>
          <div className='col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1'>
            <h2 className='project-title'>Twitter Search Modal</h2>
            <p>Javascript, React and Redux</p>
            <img className='project-pic img-responsive' src='/src/images/tweet_search.jpg'></img>
            <p>View <a href='https://github.com/sus111/tweet-search/tree/modal'>code on github</a></p>
          </div>
        </div>
      </div>
    );
  }
}
