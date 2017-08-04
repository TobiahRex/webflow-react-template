import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  Greeting, // TODO 1)Change Me
} from './components.imports';

import {
  webflowJs,
  webflowCss,
} from './utilities.imports';

const { string } = PropTypes;

class CHANGEME extends React.Component = {  // TODO 2) Change Me
  constructor(props) {
    super(props);

    this.state = {
      Name: 'Toby',
    };
  }

  componentDidMount() {
    webflowJs();
    webflowCss();
  }

  render() {
    const {
      Name,
    } = this.state;

    return (
      <div>
        <Greeting name={Name} />

      </div>
    );
  }
}
