'use strict';

import React, {Component} from 'react';
import Header from '../header';
import Styles from './style.scss';

class DemoFive extends Component {
  render(){
    return(
      <div>
        <Header />
        <h1 style={{fontSize: 40}}>Hello world!</h1>
        <h1 className={Styles.h1Title}>Hello world!</h1>
      </div>
    );
  }
}

export default DemoFive;
