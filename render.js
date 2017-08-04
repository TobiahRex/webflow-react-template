<<<<<<< HEAD
require('babel-polyfill');
const React = require( 'react');
// import React from 'react';
const { render } = require('react-dom');

const {
  WebflowComponent,
} = require('./results/functionalComponent.example/');
console.log('%cWebflowComponent', 'background:red;', WebflowComponent);
=======
import React from 'react';
import { render } from 'react-dom';

import {
  WebflowComponent,
} from './results/functionalComponent.example/';
>>>>>>> f8b44095640340ac4b13aa01911fcc7d7d032dc4

render (
  <WebflowComponent />
  , document.getElementById('root');
)
