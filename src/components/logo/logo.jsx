import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';
import styles from './logo.module.scss';

function Logo({ isfooter}) {
  return (
    <div className={isfooter && styles.footer}>
      <a href="/">
        <img src={logo} alt="ligabank logo" width="149" height="25"/>
      </a>
    </div>
  );
}

Logo.propTypes = {
  isfooter: PropTypes.bool.isRequired,

};

export default Logo;
