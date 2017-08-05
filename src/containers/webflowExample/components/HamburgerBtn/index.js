import React from 'react';

import { WebflowJs } from './assets/utils';

const HamburgerBtn = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="menu-button mobile-hamburger-button w-nav-button">
      <div className="hamburger-icon icon-2 w-icon-nav-menu" />
    </div>
  );
};

export default HamburgerBtn;
