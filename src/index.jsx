'use strict';

import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Styles from './style/style.scss'
export default class App extends Component {
  render(){
    return(
      <div>
        <h1 className={Styles.redBg}>Hello world!!!</h1>
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#app"));
