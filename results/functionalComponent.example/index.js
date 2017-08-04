import React form 'react';
import PropTypes from 'prop-types';

import {
  webflowJs,
  webflowCss,
} from './utilities.imports';

const Greeting = ({ Name }) => {
  webflowJs();
  webflowCss();

  return (
    <h1>Hi {Name}</h1>
  );
}

const { string } = PropTypes;

Greeting.propTypes = {
  Name: string.isRequired,
};

export default Greeting;
