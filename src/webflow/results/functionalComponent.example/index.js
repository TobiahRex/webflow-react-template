import React from 'react';
import PropTypes from 'prop-types';

import {
  webflowJs,
} from './utilities.imports';

const Greeting = ({ name }) => {
  webflowJs();

  return (
    <div className="banner">
      <div className="navbar-mobile-portrait navbar-wrapper w-nav" data-animation="default" data-collapse="medium" data-duration="1000" data-easing="ease-in-out" data-ix="navbar-zoom-in-on-load"><a className="navbar-wrapper__logo w-nav-brand" href=""><img className="image-3" src="images/LoneSmoke_Logo_HiRes_navbar.png" width="70" /></a>
        <nav className="mobile-nav-menu nav-menu w-nav-menu" role="navigation">
          <div className="language-wrapper w-dropdown" data-delay="0">
            <div className="language-drop-down mobile-language-wrapper w-dropdown-toggle">
              <div className="language-japanese-block"><img height="14" src="images/english-flag.png" />
                <div className="active-language-english-text text-block-2">English</div>
                <div className="icon w-icon-dropdown-toggle"></div>
              </div>
            </div>
            <nav className="dropdown-list w-dropdown-list"><a className="language-choice-block mobile-language-nihongo-block mobile-portrait-language-dropdown w-inline-block" href="http://lonesmoke.webflow.io/japanese"><img className="image-34" src="images/nihongo-flag.png" /><div className="english-text-dropdown">日本語</div></a></nav>
          </div>
        </nav>
        <nav className="mobile-navs nav-menu-right w-nav-menu" role="navigation"><a className="mobile-centered navbar__nav-link w-nav-link" href="#menu">MENU</a>
          <div className="mobile-hidden navbar_nav-break"></div><a className="mobile-centered navbar__nav-link w-nav-link" href="#about">ABOUT</a>
          <div className="mobile-hidden navbar_nav-break"></div><a className="mobile-centered navbar__nav-link w-nav-link" href="#contact">CONTACT</a>
          <div className="mobile-hidden navbar_nav-break"></div><a className="link-block-3 mobile-location-wrapper navbar__nav-icon w-inline-block" href="#location"><img className="image-4" src="images/loneSmoke-gps-icon-white-WEB.png" width="25" /></a></nav>
        <div className="menu-button mobile-hamburger-button w-nav-button">
          <div className="hamburger-icon icon-2 w-icon-nav-menu"></div>
        </div>
      </div>
      <div className="header">
        <div className="header-info-slide"></div>
      </div>
      <div className="slider w-slider" data-animation="slide" data-autoplay="1" data-delay="5000" data-duration="1500" data-infinite="1">
        <div className="mask w-slider-mask">
          <div className="slide-1 w-slide" data-ix="background-fade-in">
            <div className="main-head-container w-container">
              <div className="align-center header-slide-1">
                <div className="lonesmoke-title">
                  <h1 className="heading-7"><strong className="important-text-5">Lone Smoke</strong></h1>
                  <h1 className="title-americanbbq">American BBQ</h1>
                  <h3 className="heading-8">ZushI beach</h3>
                </div>
                <div className="slide-title"><img className="splash-logo" sizes="215px" src="images/LoneSmoke_Logo_HiRes_splash-shadow.png" srcset="images/LoneSmoke_Logo_HiRes_splash-shadow-p-500.png 500w, images/LoneSmoke_Logo_HiRes_splash-shadow.png 750w" width="215" />
                  <h1 className="title-americanbbq" data-ix="slide-1-zoom-in-on-load-2">AMERICAN BBQ</h1>
                  <h1 className="title-welcome" data-ix="slide-1-zoom-in-on-load-3">AT</h1>
                  <h1 className="zushi-beach-title" data-ix="slide-1-zoom-in-on-load-4">Zushi Beach</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-3 slide-ribs w-slide">
            <div className="container-3 w-container">
              <h1 className="featured-title slider-3-title">featured</h1>
              <h1 className="slider-h1" data-ix="slide-2-zoom-in-on-load-5">Smoked Pork Ribs</h1>
              <h3 className="slider-h3" data-ix="slide-2-zoom-in-on-load-6">¥4000 - Full Rack</h3>
              <div className="div-block-3" data-ix="slide-2-zoom-in-on-load-7"><a className="slider-menu-button w-button" href="#menu">MENU</a></div>
            </div>
          </div>
          <div className="slide-3 slide-smoked w-slide">
            <div className="container-3 header-slide-3 w-container">
              <h1 className="slider-3-title" data-ix="slide-3-zoom-in-on-load-8">100% smoked Meat</h1>
              <h1 className="slider-h1" data-ix="slide-3-zoom-in-on-load-9">Juicy &amp; Delicious</h1>
              <div className="div-block-3" data-ix="slide-3-zoom-in-on-load-10"><a className="slider-menu-button w-button" href="#menu">menu</a></div>
            </div>
          </div>
        </div>
        <div className="left-arrow w-slider-arrow-left">
          <div className="header-slider-navbutton header-slider-navbutton--left">
            <div className="slider-nav-icon w-icon-slider-left"></div>
          </div>
        </div>
        <div className="right-arrow w-slider-arrow-right">
          <div className="header-slider-navbutton header-slider-navbutton--right">
            <div className="slider-nav-icon w-icon-slider-right"></div>
          </div>
        </div>
        <div className="slider-nav-icons w-round w-shadow w-slider-nav" data-ix="background-image-fade-in"></div>
      </div>
    </div>
);
};

const { string } = PropTypes;

Greeting.propTypes = {
  name: string.isRequired,
};

export default Greeting;
