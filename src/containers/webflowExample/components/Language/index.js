import React from 'react';

import { WebflowJs } from './assets/utils';

const Language = () => {
  WebflowJs(); //eslint-disable-line

  return (
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
  );
};

export default Language;
