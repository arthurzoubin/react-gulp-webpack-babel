'use strict';

import {INCREASE} from './actions';

const counter = (state = {count: 0}, action) => {
  let count = state.count;
  switch(action.type){
    case INCREASE:
      return {count: count+1};
    default:
      return state;
  }
}

export default counter;
