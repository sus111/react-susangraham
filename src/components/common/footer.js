import React from 'react';

const Footer = () => {
  return (
    <div className='footer row'>
      <div className='footer-logos'>
        <a target="_blank" href='mailto:sgraham535@gmail.com'>
        <img className='logo email-logo' src='/src/images/email_logo.svg'/></a>
        <a target="_blank" href='https://github.com/sus111'><img className='logo' src='/src/images/github_logo.svg'/></a>
        <a target="_blank" href='https://uk.linkedin.com/in/susan-graham-031354a7'>
        <img className='logo' src='/src/images/linkedIn_logo.svg'/></a>
      </div>
    </div>
  );
}

export default Footer;
