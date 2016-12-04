'use strict';

import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './reducers';
import Counter from './modules/counter/container';

const store = createStore(rootReducers);

export default class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}
