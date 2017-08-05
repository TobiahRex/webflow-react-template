import React from 'react';

import {
  Language,
  NavMenu,
  HamburgerBtn,
} from '../';

const Navbar = () => (
  <div
    className="navbar-mobile-portrait navbar-wrapper w-nav"
    data-animation="default"
    data-collapse="medium"
    data-duration="1000"
    data-easing="ease-in-out"
    data-ix="navbar-zoom-in-on-load"
  >
    <a className="navbar-wrapper__logo w-nav-brand" href="">
      <img
        className="image-3"
        src="images/LoneSmoke_Logo_HiRes_navbar.png"
        width="70"
        role="presentation"
      />
    </a>
    <Language />
    <NavMenu />
    <HamburgerBtn />
  </div>
);


export default Navbar;
