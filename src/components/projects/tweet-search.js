import React, { Component } from 'react';

export default class TweetSearch extends Component {

  render() {
    return (
      <div className='tweet'>
        <div className='project col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1'>
          <h2 className='project-title'>Twitter Search Modal</h2>
          <p className='tech'>JAVASCRIPT | ES6 | REACT | REDUX | JEST | ENZYME</p>
          <p className='subtitle-yellow'>Modal diaplying information about a Twitter user</p>
          <img className='project-pic img-responsive' src='/src/images/tweet_search.jpg'></img>
          <p className='subtitle-light-blue'>View <a className='subtitle-light-blue' href='https://github.com/sus111/tweet-search/tree/modal'>code on github</a></p>
          <p className='project-description'>I built a fully-reponsive modal as an additional feature to an app that was built in React and Redux. I worked on another developer's code base and managed to integrate my code to fit the design of the code and styling of the application.</p>
        </div>
      </div>
    )
  }
}
