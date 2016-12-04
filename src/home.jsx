'use strict';

import React, {Component} from 'react';
import { Link } from 'react-router';
import Header from './header';

class Home extends Component {
  render(){
    return(
      <div>
        <Header />
        <ul className="list-group">
          <li className="list-group-item">
              <Link to="/demoone">
                <button type="button" className="btn btn-block btn-primary">
                Hello World
                </button>
              </Link>
          </li>
          <li className="list-group-item">
            <Link to="/demotwo">
              <button type="button" className="btn btn-block btn-primary">
                Props
              </button>
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/demothree">
              <button type="button" className="btn btn-block btn-primary">
                State
              </button>
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/demofour">
              <button type="button" className="btn btn-block btn-primary">
                Router
              </button>
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/demofive">
              <button type="button" className="btn btn-block btn-primary">
                Style
              </button>
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/demosix">
              <button type="button" className="btn btn-block btn-primary">
                Redux
              </button>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
