import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DesktopHeader from './desktopHeader';
import MobileHeader from './mobileHeader';

export default class Header extends Component {

  render() {
    return (
      <div className='header-background'>
        <div className='row header-overlay'>
          <DesktopHeader />
          <MobileHeader />
        </div>
      </div>
    );
  }
}
