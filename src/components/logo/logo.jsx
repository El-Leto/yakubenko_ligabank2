import React from 'react';
import logo from '../../images/logo.svg';

function Logo() {
  return (
    <div>
      <a href="/">
        <img src={logo} alt="ligabank logo" width="149" height="25"/>
      </a>
    </div>
  );
}

export default Logo;
