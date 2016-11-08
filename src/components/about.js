import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {

  render() {
    return (
      <div className='about-content'>
        <div className='row'>
          <div className='about col-lg-4 col-lg-offset-2 col-sm-5 col-sm-offset-1 col-xs-10'>
            <h3>Hello!</h3>
            <p>I am a creative front-end developer looking for a junior role in London.<br></br>
            I recently graduated from <a href='http://www.makersacademy.com' target="_blank" className='anchor'>Makers Academy</a>, an intensive developer bootcamp, where I learned the fundamentals of programming. I can build a fully-tested full-stack application, but my heart lies in front-end development. I love creating responsive web sites, especially in React, like this one!<br></br>
            Before learning to code, I studied Politics and French and University in London and then worked abroad in Moscow and Tokyo as an English teacher.</p>
          </div>
          <div className='tech-skills col-lg-4 col-sm-5 col-xs-10'>
            <h3>Tech Skills</h3>
            <p>Front-end:</p>
            <p className='tech tech-about'>JAVASCRIPT | REACT | REDUX | JQUERY | BOOTSTRAP</p>
            <p>Back-end:</p>
            <p className='tech tech-about'>NODE | EXPRESS | RAILS</p>
            <p>Testing Frameworks:</p>
            <p className='tech tech-about'>JASMINE | MOCHA | JEST | RSPEC | CAPYBARA</p>
            <p>Design Software:</p>
            <p className='tech tech-about'>PHOTOSHOP | ILLUSTRATOR | SKETCH</p>
          </div>
        </div>
        <div className='row'>
          <div className='additional-skills col-lg-4 col-lg-offset-2 col-sm-5 col-sm-offset-1 col-xs-10'>
            <h3>Additional Skills</h3>
            <p>Art and Design:</p>
            <p>I have a diploma in art and design, and I love drawing. I recently completed a course with London College of Art in Cartooning. Some of my work can be found <a className='anchor' target="_blank" href='http://rainbowtrotsky.tumblr.com'>here</a>.</p>
            <p>Languages:</p>
            <p>Living and working in several countreis enabled me to become fluent in both French and Russian. After spending my gap-year in Paris, I studied French at University. After four years working in Moscow and studying Russian in my free time, I became a fluent speaker.</p>
          </div>
          <div className='contact-about col-lg-4 col-sm-5 col-xs-10'>
            <div className='about-row'>
              <a target="_blank" href='http://rainbowtrotsky.tumblr.com'>
              <img className='about-logo' src='/src/images/tumblr_logo.svg'/></a>
              <a target="_blank" href='mailto:sgraham535@gmail.com'>
              <img className='about-logo' src='/src/images/email_logo.svg'/></a>
            </div>
            <div className='about-row'>
              <a target="_blank" href='https://github.com/sus111'><img className='about-logo' src='/src/images/github_logo.svg'/></a>
              <a target="_blank" href='https://uk.linkedin.com/in/susan-graham-031354a7'>
              <img className='about-logo' src='/src/images/linkedin_logo.svg'/></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
