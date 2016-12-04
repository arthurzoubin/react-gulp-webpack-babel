'use strict';

import React, {Component} from 'react';
import Header from '../header';

class Example extends Component {
  render(){
    return(
      <div>
        Props: {this.props.text}
      </div>
    );
  }
}

class DemoTwo extends Component {
  render(){
    return(
      <div>
        <Header />
        <Example text="I am props"/>
      </div>
    );
  }
}

export default DemoTwo;
