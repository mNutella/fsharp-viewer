import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Runner from '../components/Runner';
import * as RunnerActions from '../actions/runner';

function mapStateToProps(state) {
  return {
    isRunning: state.runner.isRunning,
    commandResult: state.runner.commandResult
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(RunnerActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Runner);
