'use strict';

import * as ActionsCreator from './actions';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Counter from './components/counter';

const mapStateToProps = (state) => {
  return {
    value: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ActionsCreator, dispatch)
  }
}

const TodoCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default TodoCounter;
