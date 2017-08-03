/**
* Smart Componet Template
* This file should be used ONLY for sections of Webflow templates that require DYNAMIC FUNCTIONALITY.
* There are numbers indicating where names should be changed to names that make sense per the purpose of the Component.  Descriptions are provided in the following comment lines to help provide amplifying info and what the changes mean.
* 1) "Example" is the name of a "child component" that you've already created and want to render INSIDE of this "smart Component."  This line "imports", "child compoennts" to be used INSIDE of a "parent component".  In the following step you will assign the name of the "parent component".
* 2) "CHANGME" needs to be changed to the name of the "parent component".
* 3) "EXAMPLEVAR" is the name of the dynamic variable that will be used inside the application.
*/

import React from 'react';
import PropTypes from 'prop-types';

import {
  Example, // 1) Change Me
} from './components.imports';

const { string } = PropTypes;

class CHANGME extends React.Component = {  // 2) Change Me
  constructor(props) {
    super(props);

    this.state = {
      EXAMPLEVAR: '', // 3) Change me.
    };
  }

  render() {
    const {
      EXAMPLEVAR, // 4) Change me to match the name from #3.
    } = this.state;

    return (
      <Example>
        {/*

          4) Delete everything

          - Delete "Example" and paste in the HTML you cut from the webflow template.

          - Delete "Example2".  If you need to insert a "child component" that you imported from "component.imports", then Paste it in place of "Example2"

        */}
        <Example2>
          {EXAMPLEVAR}
        </Example2>
      </Example>
    );
  }
}
