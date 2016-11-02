import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {

  render() {
    return (
      <div className='about-content'>
        <p className='about col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1' >I am a front-end developer looking for a junior role in London.<br></br>
        I have been teaching myself how to code for about a year, and I recently graduated from Makers Academy, a developer bootcamp. I love writing Javascript, and have recently got to grips with React and Redux. I am also well versed in Ruby and the principles of Object-Oriented Programming, and the benefits of test-driven development.<br></br>
        Since graduating University with a politics degree, I spent several years working abroad as an English teacher, in Tokyo and Moscow.
        </p>
      </div>
    );
  }
}
