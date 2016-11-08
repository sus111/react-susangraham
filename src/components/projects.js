import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Codey from './projects/codey';
import RoadToCode from './projects/road-code';
import TweetSearch from './projects/tweet-search';
import TransactionViewer from './projects/transaction-viewer';

export default class Projects extends Component {

  render(){

    return(
      <div className='projects row'>
        <Codey />
        <RoadToCode />
        <TweetSearch />
        <TransactionViewer />
      </div>
    );
  }
}
