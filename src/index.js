import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import './webflow/webflow.css';

import WebflowExample from './containers/webflowExample/';

render(
  <WebflowExample name="toby" />,
  document.getElementById('app')
);
