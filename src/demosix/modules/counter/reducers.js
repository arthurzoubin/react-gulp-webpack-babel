'use strict';

import {INCREASE, RESET} from './actions';

const counter = (state = {count: 0}, action) => {
  let count = state.count;
  switch(action.type){
    case INCREASE:
      return {count: count+1};
    case RESET:
      return {count: 0};
    default:
      return state;
  }
}

export default counter;
