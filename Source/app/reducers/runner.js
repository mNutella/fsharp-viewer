// @flow
import { EXECUTE_COMMAND, RECEIVE_COMMAND_RESULT } from '../actions/runner';
import type { Action, runnerStateType } from './types';

export default function runner(
  state: runnerStateType = {
    isRunning: false,
    commandResult: null
  },
  action: Action
) {
  switch (action.type) {
    case EXECUTE_COMMAND:
      return Object.assign({}, state, {
        isRunning: true
      });
    case RECEIVE_COMMAND_RESULT:
      return Object.assign({}, state, {
        isRunning: false,
        commandResult: action.commandResult
      });
    default:
      return state;
  }
}
