import React, { Component } from 'react';

export default class TweetSearch extends Component {

  render() {
    return (
      <div className='col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1'>
        <h2 className='project-title'>Twitter Search Modal</h2>
        <p>Javascript, React and Redux</p>
        <img className='project-pic img-responsive' src='/src/images/tweet_search.jpg'></img>
        <p>View <a href='https://github.com/sus111/tweet-search/tree/modal'>code on github</a></p>
      </div>
    )
  }
}
