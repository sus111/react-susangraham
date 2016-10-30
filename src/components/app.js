import React, { Component } from 'react';
import Header from './common/header';
import Footer from './common/footer';

export default class App extends Component {
  render() {
    return (
      <div className='background'>
        <Header />
        <div className='content'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
