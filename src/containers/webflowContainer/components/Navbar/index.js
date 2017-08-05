import React from 'react';

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
    <nav className="mobile-nav-menu nav-menu w-nav-menu" role="navigation" >
      <div className="language-wrapper w-dropdown" data-delay="0">
        <div className="language-drop-down mobile-language-wrapper w-dropdown-toggle">
          <div className="language-japanese-block">
            <img height="14" src="images/english-flag.png" role="presentation" />
            <div className="active-language-english-text text-block-2">English</div>
            <div className="icon w-icon-dropdown-toggle" />
          </div>
        </div>
        <nav className="dropdown-list w-dropdown-list">
          <a className="language-choice-block mobile-language-nihongo-block mobile-portrait-language-dropdown w-inline-block" href="http://lonesmoke.webflow.io/japanese">
            <img className="image-34" src="images/nihongo-flag.png" role="presentation" />
            <div className="english-text-dropdown">日本語</div>
          </a>
        </nav>
      </div>
    </nav>
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
    <div className="menu-button mobile-hamburger-button w-nav-button">
      <div className="hamburger-icon icon-2 w-icon-nav-menu" />
    </div>
  </div>
);


export default Navbar;
