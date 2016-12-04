'use strict';

import React, {Component} from 'react';
import Header from '../header';

class Example extends Component {
  render(){
    return(
      <div>
        New view.
      </div>
    );
  }
}

class DemoThree extends Component {

  constructor(){
    super();
    this.state = {
      loaded: false
    }
  }

  render(){
    if(!this.state.loaded){
      return(
        <div>
          <Header />
          <button type="button" className="btn" onClick={() => {
            this.setState({
              loaded: true
            });
          }}>Change state</button>
        </div>
      );
    }
    return(
      <div>
        <Header />
        <Example />
      </div>
    );
  }
}

export default DemoThree;
