import React from 'react';

import { WebflowJs } from './assets/utils';

const Slider = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div
      className="slider w-slider"
      data-animation="slide"
      data-autoplay="1"
      data-delay="5000"
      data-duration="1500"
      data-infinite="1"
    >
      <div className="mask w-slider-mask">
        <div className="slide-1 w-slide" data-ix="background-fade-in">
          <div className="main-head-container w-container">
            <div className="align-center header-slide-1">
              <div className="lonesmoke-title">
                <h1 className="heading-7">
                  <strong className="important-text-5">Lone Smoke</strong>
                </h1>
                <h1 className="title-americanbbq">American BBQ</h1>
                <h3 className="heading-8">ZushI beach</h3>
              </div>
              <div className="slide-title">
                <img className="splash-logo" sizes="215px" src="images/LoneSmoke_Logo_HiRes_splash-shadow.png" srcSet="images/LoneSmoke_Logo_HiRes_splash-shadow-p-500.png 500w, images/LoneSmoke_Logo_HiRes_splash-shadow.png 750w" width="215" role="presentation" />
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
            <div className="div-block-3" data-ix="slide-2-zoom-in-on-load-7">
              <a className="slider-menu-button w-button" href="/menu">MENU</a>
            </div>
          </div>
        </div>
        <div className="slide-3 slide-smoked w-slide">
          <div className="container-3 header-slide-3 w-container">
            <h1 className="slider-3-title" data-ix="slide-3-zoom-in-on-load-8">100% smoked Meat</h1>
            <h1 className="slider-h1" data-ix="slide-3-zoom-in-on-load-9">Juicy &amp; Delicious</h1>
            <div className="div-block-3" data-ix="slide-3-zoom-in-on-load-10">
              <a className="slider-menu-button w-button" href="/menu">menu</a>
            </div>
          </div>
        </div>
      </div>
      <div className="left-arrow w-slider-arrow-left">
        <div className="header-slider-navbutton header-slider-navbutton--left">
          <div className="slider-nav-icon w-icon-slider-left" />
        </div>
      </div>
      <div className="right-arrow w-slider-arrow-right">
        <div className="header-slider-navbutton header-slider-navbutton--right">
          <div className="slider-nav-icon w-icon-slider-right" />
        </div>
      </div>
      <div className="slider-nav-icons w-round w-shadow w-slider-nav" data-ix="background-image-fade-in" />
    </div>
  );
};


export default Slider;
