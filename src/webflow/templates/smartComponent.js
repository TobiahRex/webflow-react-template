/**
* Smart Componet Template
* This file should be used ONLY for sections of Webflow templates that require DYNAMIC FUNCTIONALITY.
* There are numbers indicating where names should be changed to names that make sense per the purpose of the Component.  Descriptions are provided in the following comment lines to help provide amplifying info and what the changes mean.
* 1) "Example" is the name of a "child component" that you've already created and want to render INSIDE of this "smart Component."  This line "imports", "child compoennts" to be used INSIDE of a "parent component".  In the following step you will assign the name of the "parent component".
* 2) class "CHANGEME" needs to be changed to the name of the "parent component".
* 3) "EXAMPLEVAR" is the name of the dynamic variable that will be used inside the application.
* 4) The variable changed in step 3 will be imported to the render() function here.  You must change this name to match the name you assigned in step 3.
* 5)
*/

import React from 'react';
import PropTypes from 'prop-types';

import {
  Example, // TODO 1)Change Me
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
      EXAMPLEVAR: '', // TODO 3) Change me.
    };
  }

  componentDidMount() {
    webflowJs();
    webflowCss();
  }

  render() {
    const {
      EXAMPLEVAR, // TODO 4) Change me to match the name from #3.
    } = this.state;

    return (
      <Example>
        {/*
          TODO
          5) Replace everything inside the parens directly after "return".

          NOTE
          - Replace "Example" and paste in the HTML you cut from the webflow template.

          - Replace "Example2".  If you need to insert a "child component" that you imported from "component.imports" (Step 1), then Paste it in place of "Example2"

        */}
        <Example2>
          {/*
            TODO
            6) Replace the name below "EXAMPLEVAR" with the name you assigned in steps 4 & 5.

            NOTE
            - Wherever the dynamic variable will be used is where you need to insert the variable.

            - You insert the variable by writing "{VARIABLE}".  The brackets ({}) are mandatory.
          */}
          {EXAMPLEVAR}
        </Example2>
      </Example>
    );
  }
}
