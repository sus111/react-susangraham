import React, { Component } from 'react';
import Header from './common/header';
import Footer from './common/footer';

export default class App extends Component {

  render() {
    return (
      <body>
        <div className='content'>
          <Header />
            {this.props.children}
          <Footer />
        </div>
      </body>
    );
  }
}
