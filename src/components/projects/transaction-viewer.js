import React, { Component } from 'react';

export default class TransactionViewer extends Component {

  render(){
    return (
      <div className='col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1'>
        <h2 className='project-title'>Transaction Viewer</h2>
        <p>Javascript, Express</p>
        <img className='project-pic img-responsive' src='/src/images/transaction_viewer.jpg'></img>
        <p>View <a href='https://github.com/sus111/transaction_viewer'>code on github</a></p>
      </div>
    )
  }
}
