import React from 'react';

import { WebflowJs } from './assets/utils';

const NavMenu = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <nav className="mobile-navs nav-menu-right w-nav-menu" role="navigation">
      <a className="mobile-centered navbar__nav-link w-nav-link" href="/menu">MENU</a>
      <div className="mobile-hidden navbar_nav-break" />
      <a className="mobile-centered navbar__nav-link w-nav-link" href="/about">ABOUT</a>
      <div className="mobile-hidden navbar_nav-break" />
      <a className="mobile-centered navbar__nav-link w-nav-link" href="/contact">CONTACT</a>
      <div className="mobile-hidden navbar_nav-break" />
      <a className="link-block-3 mobile-location-wrapper navbar__nav-icon w-inline-block" href="/location">
        <img className="image-4" src="images/loneSmoke-gps-icon-white-WEB.png" width="25" role="presentation" />
      </a>
    </nav>
  );
};

export default NavMenu;
