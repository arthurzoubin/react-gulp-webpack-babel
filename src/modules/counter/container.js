'use strict';

import {increase} from './actions';
import {connect} from 'react-redux';
import Counter from './components/counter';

const mapStateToProps = (state) => {
  return {
    value: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(increase())
  }
}

const TodoCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default TodoCounter;
