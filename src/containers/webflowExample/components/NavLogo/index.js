import React from 'react';

import { WebflowJs } from './assets/utils';

const NavLogo = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <a className="navbar-wrapper__logo w-nav-brand" href="">
      <img
        className="image-3"
        src="images/LoneSmoke_Logo_HiRes_navbar.png"
        width="70"
        role="presentation"
      />
    </a>
  );
};

export default NavLogo;
