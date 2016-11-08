import React, { Component } from 'react';

export default class TransactionViewer extends Component {

  render(){
    return (
      <div className='transaction'>
        <div className='project col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1'>
          <h2 className='project-title'>Transaction Viewer</h2>
          <p className='tech'>JAVASCRIPT | NODE | EXPRESS | MOCHA</p>
          <p className='subtitle-pink'>Send information about your device</p>
          <img className='project-pic img-responsive' src='/src/images/transaction_viewer.png'></img>
          <p className='subtitle-light-blue'>View <a className='subtitle-light-blue' href='https://github.com/sus111/transaction_viewer'>code on github</a></p>
          <p className='project-description'>This is a simple app, built in Express. A user can submit a transaction request, and the details of their device (such as browser and location) are sent to the server, and a random http response is simulated.</p>
        </div>
      </div>
    )
  }
}
