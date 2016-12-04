'use strict';

import React, {Component} from 'react';
import { Link } from 'react-router';
import Header from '../header';

class ExampleOne extends Component {
  render(){
    return(
      <div>
        Example One.
      </div>
    );
  }
}

class ExampleTwo extends Component {
  render(){
    return(
      <div>
        Example Two.
      </div>
    );
  }
}

class DemoFour extends Component {

  render(){
    let content = null;
    switch(this.props.params.name){
      case "exampleone":
        content = <ExampleOne />;
        break;
      case "exampletwo":
        content = <ExampleTwo />;
        break;
      default:
        content = <ul className="list-group">
          <li className="list-group-item">
              <Link to="/demofour/exampleone">
                <button type="button" className="btn btn-block btn-primary">
                Example One
                </button>
              </Link>
          </li>
          <li className="list-group-item">
            <Link to="/demofour/exampletwo">
              <button type="button" className="btn btn-block btn-primary">
                Example Two
              </button>
            </Link>
          </li>
        </ul>;
        break;
    }
    return(
      <div>
        <Header />
        {content}
      </div>
    );
  }
}

export default DemoFour;
