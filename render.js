require('babel-polyfill');
const React = require( 'react');
// import React from 'react';
const { render } = require('react-dom');

const {
  WebflowComponent,
} = require('./results/functionalComponent.example/');
console.log('%cWebflowComponent', 'background:red;', WebflowComponent);

render (
  <WebflowComponent />
  , document.getElementById('root');
)
