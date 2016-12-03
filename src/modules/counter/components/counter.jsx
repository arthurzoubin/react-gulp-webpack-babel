'use strict';

import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Counter extends Component {

  render(){
    const {value, onIncreaseClick} = this.props;
    return(
      <div>
        <span>Value:{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: React.PropTypes.number.isRequired,
  onIncreaseClick: React.PropTypes.func.isRequired
}

export default Counter;
