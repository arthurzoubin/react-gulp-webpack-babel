'use strict';

import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Header from '../../../../header';

class Counter extends Component {

  render(){
    const {value, actions} = this.props;
    return(
      <div>
        <Header />
        <span>Value:{value}</span><br></br>
        <button type="button" className="btn" onClick={actions.increase}>Increase</button>
        <button type="button" className="btn" onClick={actions.reset}>Reset</button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: React.PropTypes.number.isRequired
}

export default Counter;
