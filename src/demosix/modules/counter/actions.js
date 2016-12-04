'use strict';

export const INCREASE = 'INCREASE';
export const RESET = 'RESET';

export const increase = () => {
  return {
    type: INCREASE
  }
}

export const reset = () => {
  return {
    type: RESET
  }
}
