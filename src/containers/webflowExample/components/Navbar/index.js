import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  NavLogo,
  Language,
  NavMenu,
  HamburgerBtn,
} from '../';

const Navbar = () => {
  WebflowJs() //eslint-disable-line

  return (
    <div
      className="navbar-mobile-portrait navbar-wrapper w-nav"
      data-animation="default"
      data-collapse="medium"
      data-duration="1000"
      data-easing="ease-in-out"
      data-ix="navbar-zoom-in-on-load"
    >
      <NavLogo />
      <Language />
      <NavMenu />
      <HamburgerBtn />
    </div>
  );
};

export default Navbar;
