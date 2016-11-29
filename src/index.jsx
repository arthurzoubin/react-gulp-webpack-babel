'use strict';

import React, {Component} from 'react';
import ReactDom from 'react-dom';

export default class App extends Component {
  render(){
    return(
      <div>
        <h1>Hello world!!!</h1>
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#app"));
